import type { GBPAnalysis } from "./gbp-analyzer";

export function buildResultsEmailHtml(analysis: GBPAnalysis, recipientName: string): string {
  const scoreColor =
    analysis.totalScore >= 80 ? "#16a34a" :
    analysis.totalScore >= 60 ? "#2563EB" :
    analysis.totalScore >= 40 ? "#d97706" : "#DC2626";

  const categoryRows = analysis.categories
    .map(
      (c) => `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#374151;">${c.category}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;font-size:14px;font-weight:600;color:${
          c.score >= c.maxScore * 0.7 ? "#16a34a" : c.score >= c.maxScore * 0.4 ? "#d97706" : "#DC2626"
        };">${c.score} / ${c.maxScore}</td>
      </tr>`
    )
    .join("");

  const suggestionItems = analysis.topSuggestions
    .map((s) => `<li style="padding:6px 0;font-size:14px;color:#374151;line-height:1.6;">${s}</li>`)
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:linear-gradient(135deg,#1E3A5F,#0F1D2F);padding:40px 32px;text-align:center;">
        <h1 style="margin:0;font-size:22px;font-weight:700;color:white;">School of Home Service</h1>
        <p style="margin:8px 0 0;font-size:14px;color:#93a3b8;">Google Business Profile Analysis</p>
      </div>

      <!-- Score -->
      <div style="text-align:center;padding:32px;">
        <p style="margin:0;font-size:14px;color:#6b7280;">Hey ${recipientName}, here's your GBP score:</p>
        <div style="margin:20px auto;width:120px;height:120px;border-radius:50%;border:6px solid ${scoreColor};display:flex;align-items:center;justify-content:center;">
          <div>
            <div style="font-size:36px;font-weight:800;color:${scoreColor};line-height:1;">${analysis.totalScore}</div>
            <div style="font-size:12px;color:#9ca3af;">/ 100</div>
          </div>
        </div>
        <div style="display:inline-block;padding:6px 16px;background:${scoreColor}20;color:${scoreColor};font-size:14px;font-weight:600;border-radius:20px;">
          Grade: ${analysis.grade}
        </div>
        ${analysis.businessName ? `<p style="margin:12px 0 0;font-size:13px;color:#9ca3af;">${analysis.businessName}</p>` : ""}
      </div>

      <!-- Breakdown -->
      <div style="padding:0 32px 24px;">
        <h2 style="font-size:16px;font-weight:700;color:#1f2937;margin:0 0 16px;">Score Breakdown</h2>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="padding:8px 16px;text-align:left;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Category</th>
              <th style="padding:8px 16px;text-align:left;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Score</th>
            </tr>
          </thead>
          <tbody>${categoryRows}</tbody>
        </table>
      </div>

      <!-- Suggestions -->
      ${analysis.topSuggestions.length > 0 ? `
      <div style="padding:0 32px 32px;">
        <h2 style="font-size:16px;font-weight:700;color:#1f2937;margin:0 0 12px;">Top Improvements</h2>
        <ol style="margin:0;padding:0 0 0 20px;">${suggestionItems}</ol>
      </div>` : ""}

      <!-- CTA -->
      <div style="background:#f9fafb;padding:32px;text-align:center;border-top:1px solid #e5e7eb;">
        <h3 style="margin:0;font-size:18px;font-weight:700;color:#1f2937;">Let Us Go Over Your Results With You</h3>
        <p style="margin:8px 0 20px;font-size:14px;color:#6b7280;">Book a free call and we'll walk through your score together and build an action plan.</p>
        <a href="https://schoolofhomeservice.com/contact" style="display:inline-block;padding:14px 32px;background:#B91C1C;color:white;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">
          Book Your Free Review Call
        </a>
      </div>

    </div>
    <p style="text-align:center;font-size:12px;color:#9ca3af;margin:24px 0 0;">&copy; ${new Date().getFullYear()} School of Home Service. All rights reserved.</p>
  </div>
</body>
</html>`;
}

export async function sendResultsEmail(
  to: string,
  recipientName: string,
  analysis: GBPAnalysis
) {
  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    console.warn("Resend API key not configured — skipping email send");
    return null;
  }

  const html = buildResultsEmailHtml(analysis, recipientName);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "School of Home Service <results@schoolofhomeservice.com>",
      to,
      subject: `Your GBP Score: ${analysis.totalScore}/100 — ${analysis.grade}`,
      html,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    console.error("Resend error:", data);
  }

  return response;
}
