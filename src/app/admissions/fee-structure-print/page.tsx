import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Structure 2027 — Bertharry English Private School",
};

const optionA = [
  { grade: "Pre-School", monthly: "R1 300.00", quarterly: "R3 900.00", annually: "R15 600.00" },
  { grade: "Grade 1, 2 & 3", monthly: "R1 500.00", quarterly: "R4 500.00", annually: "R18 000.00" },
  { grade: "Grade 4, 5 & 6", monthly: "R1 600.00", quarterly: "R4 800.00", annually: "R19 200.00" },
  { grade: "Grade 7, 8 & 9", monthly: "R1 700.00", quarterly: "R5 100.00", annually: "R20 400.00" },
  { grade: "Grade 10, 11 & 12", monthly: "R1 800.00", quarterly: "R5 400.00", annually: "R21 600.00" },
];

const registrationFees = [
  { label: "Registration fee (new students)", amount: "R800" },
  { label: "Re-registration fee (returning students)", amount: "R350" },
  { label: "Compulsory refundable deposit (new learners only)", amount: "R500" },
  { label: "Non-South African students — advance payment", amount: "R1 000" },
];

const requirements = [
  "Certified copy of Parent / Legal Guardian's ID Document",
  "Certified copy of Child's Birth Certificate",
  "Certified copy of Learner's Latest School Report",
  "Transfer card from previous school (where applicable)",
  "Proof of Grade R attendance (Grade 1 new learners)",
  "Copy of clinic card of learner (Grade R learners only)",
  "Proof of residence",
  "Two ID colour photos of the learner (new learners only)",
];

export default function FeeStructurePrintPage() {
  return (
    <html lang="en">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap');

          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: 'Sora', sans-serif;
            background: #ffffff;
            color: #08090c;
            padding: 48px 56px;
            font-size: 13px;
            line-height: 1.6;
          }

          /* Header */
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 24px;
            border-bottom: 2px solid #04339a;
            margin-bottom: 36px;
          }
          .school-name {
            font-size: 18px;
            font-weight: 600;
            color: #04339a;
            letter-spacing: -0.01em;
          }
          .doc-title {
            font-size: 13px;
            color: #6b7280;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .year-badge {
            background: #04339a;
            color: #ffffff;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 6px 14px;
            border-radius: 6px;
          }

          /* Section headings */
          .section-label {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #9ca3af;
            margin-bottom: 10px;
          }
          .section-title {
            font-size: 16px;
            font-weight: 300;
            color: #08090c;
            margin-bottom: 16px;
          }

          /* Option A table */
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 40px;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
          }
          thead tr {
            background: #04339a;
            color: #ffffff;
          }
          th {
            padding: 12px 16px;
            text-align: left;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          tbody tr:nth-child(even) { background: #f9fafb; }
          tbody tr:nth-child(odd)  { background: #ffffff; }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #f3f4f6;
            color: #08090c;
          }
          td:first-child { font-weight: 500; }
          td:not(:first-child) {
            font-weight: 600;
            color: #04339a;
          }

          /* Two column section */
          .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 40px;
          }
          .card {
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            overflow: hidden;
          }
          .card-header {
            background: #f9fafb;
            padding: 12px 16px;
            border-bottom: 1px solid #e5e7eb;
          }
          .card-body { padding: 16px; }

          .fee-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
            font-size: 12px;
          }
          .fee-row:last-child { border-bottom: none; }
          .fee-amount {
            font-weight: 600;
            color: #04339a;
            white-space: nowrap;
          }

          .req-item {
            display: flex;
            gap: 10px;
            padding: 7px 0;
            border-bottom: 1px solid #f3f4f6;
            font-size: 12px;
          }
          .req-item:last-child { border-bottom: none; }
          .req-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #04339a;
            margin-top: 5px;
            flex-shrink: 0;
          }

          /* Footer */
          .footer {
            margin-top: 48px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #9ca3af;
          }

          @media print {
            body { padding: 32px 40px; }
            @page { margin: 0; size: A4; }
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <div>
            <p className="school-name">Bertharry English Private School</p>
            <p className="doc-title">Fee Structure</p>
          </div>
          <span className="year-badge">2027</span>
        </div>

        <p className="section-label">Option A — 12 Months Plan (Jan – Dec)</p>
        <p className="section-title">Tuition Fees by Grade</p>

        <table>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Monthly</th>
              <th>Quarterly</th>
              <th>Annually</th>
            </tr>
          </thead>
          <tbody>
            {optionA.map((row) => (
              <tr key={row.grade}>
                <td>{row.grade}</td>
                <td>{row.monthly}</td>
                <td>{row.quarterly}</td>
                <td>{row.annually}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="two-col">
          <div className="card">
            <div className="card-header">
              <p className="section-label" style={{ marginBottom: 0 }}>Registration &amp; Other Fees</p>
            </div>
            <div className="card-body">
              {registrationFees.map((f) => (
                <div key={f.label} className="fee-row">
                  <span>{f.label}</span>
                  <span className="fee-amount">{f.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <p className="section-label" style={{ marginBottom: 0 }}>Compulsory Day 1 Documents</p>
            </div>
            <div className="card-body">
              {requirements.map((r) => (
                <div key={r} className="req-item">
                  <span className="req-dot" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer">
          <span>14 Mapungubwe Street, Temong Section, Tembisa 1632</span>
          <span>bertharry@bertharryschools.co.za &nbsp;|&nbsp; +27 (011) 924 6012</span>
        </div>
      </body>
    </html>
  );
}
