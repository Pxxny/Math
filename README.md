# Math Exam Booster — Matrix Exam Boost

Web Application สำหรับ “ติวคณิตศาสตร์หน้าห้องสอบ” โดยเพิ่มระบบ **MATRIX EXAM BOOST** เป็นบทเร่งด่วนระดับ Very High Priority

## Matrix Features
- Matrix Dashboard + Exam Readiness
- Concept / Formula / Calculation / Speed / Accuracy
- Matrix Crash Course 10 ขั้น
- Matrix Formula Cheat Sheet
- Matrix Memory Tricks
- Matrix Active Recall
- 5 Minutes Matrix Drill — 10 ข้อ / 5 นาที
- Matrix Mock Exam — 20 ข้อ / 30 นาที
- Matrix Traps
- Matrix Error Analysis / Top 3 Weak Topics
- Matrix Must-Know Checklist + MATRIX READY
- Matrix Last-Minute workflow
- Exam Date priority: วันอังคาร (ตั้งค่าเริ่มต้น 2026-09-15 และแก้ได้ใน Settings)
- Matrix question bank 135 ข้อ แบ่ง Easy / Medium / Hard
- รองรับ Matrix Basic, Addition/Subtraction, Scalar, Multiplication, Transpose, Determinant 2×2/3×3, Inverse, Adjoint/Cofactor concept, Cramer's Rule และระบบสมการ

## General Features
- Dashboard / Learn / Practice / Formula / Mock / Last Minute
- Timer, Hint, Explanation, Shortcut, Common Mistake
- Wrong Question Retry
- Progress, XP, Streak
- Search
- LocalStorage
- Responsive Mobile / Tablet / Desktop
- MathJax formulas
- รวมโจทย์ตัวอย่างทั้งหมด 210 ข้อ

## เปิดใช้งาน
แตก ZIP แล้วเปิด `index.html` ได้ทันที

## ไฟล์
- index.html
- styles.css
- app.js
- questions.js
- README.md

## หมายเหตุ
MathJax ใช้ CDN จึงต้องมีอินเทอร์เน็ตเพื่อแสดงสูตรคณิตศาสตร์แบบสวยงาม

## 🤖 AI Question Generator
- เมนู `🤖 AI เจนโจทย์` สร้างโจทย์นอก Question Bank
- เลือกบท / หัวข้อ / ระดับ / จำนวน / คำสั่งเพิ่มเติม
- Server ใช้ OpenAI Responses API และ Structured Outputs เพื่อบังคับ schema
- Server ตรวจซ้ำว่า `answer` ต้องอยู่ใน `choices` และ choices ต้องไม่ซ้ำกัน ก่อนส่งกลับ
- API key ต้องอยู่ใน environment variable ของ server เท่านั้น

### Run AI mode locally
1. ติดตั้ง Node.js 18+
2. ตั้ง API key เช่น `OPENAI_API_KEY=...`
3. รัน `npm start`
4. เปิด `http://localhost:3000`

ตัวเลือก model: ตั้ง `OPENAI_MODEL` ได้ โดยค่าเริ่มต้นใน package นี้คือ `gpt-5.6-luna` ซึ่งเป็นโมเดลต้นทุนต่ำสำหรับงานปริมาณมาก

## 🧠 Theory-First Mode
- AI Question Generator now supports `🧠 ทฤษฎีเป็นหลัก (80%)` and `📚 ทฤษฎีเข้ม (90%)`.
- Theory questions focus on definitions, terminology, notation, conditions, properties, classification, true/false concepts, and exam traps rather than long calculations.
- Includes 50 Matrix theory-first demo questions covering terms such as Base/Exponent, Order, Row/Column, Square/Identity/Zero Matrix, Transpose, Determinant, Minor, Cofactor, Adjoint, Inverse, Cramer's Rule, and Matrix properties.
- Example style: `$A^x$`: identify A as Base and x as Exponent; `$A_{m×n}$`: identify rows/columns; `det(A)=0`: inverse condition; `AB=BA`: non-commutativity; transpose vs inverse.
- AI output is still validated so `answer` must match one of the four choices exactly and choices must be unique.

## Matrix Zero → Exam Ready
- เพิ่มเส้นทางเรียน Matrix ตั้งแต่ศูนย์ 12 บท
- เน้น concept-first, theory-first, instant recognition, step-by-step และลงมือทำทันที
- มี One-Liner สำหรับจำก่อนสอบ, traps, ตัวอย่าง, quick test และ progress
- มีแหล่งอ้างอิงไทยและต่างประเทศ: Project 14/IPST, SciMath, Khan Academy, OpenStax, LibreTexts
- เนื้อหาถูกสังเคราะห์ใหม่เพื่อการเรียนรู้ ไม่คัดลอกข้อความจากแหล่งใดแหล่งหนึ่ง
