import React from 'react';

function AboutUs() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4">เกี่ยวกับเรา</h1>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h3>วิทยาลัยโปลิเทคนิคลานนา</h3>
                    <p>
                        วิทยาลัยโปลิเทคนิคลานนา ตั้งอยู่ในจังหวัดเชียงใหม่
                        เป็นสถาบันการศึกษาที่มุ่งเน้นการพัฒนาทักษะในสายวิชาชีพ
                        เพื่อเตรียมนักศึกษาให้พร้อมต่อความท้าทายในโลกปัจจุบัน
                    </p>
                    <h4 className="mt-4">วิสัยทัศน์</h4>
                    <blockquote className="blockquote">
                        "พัฒนาทักษะและความรู้ด้านเทคโนโลยี เพื่อสร้างนักศึกษาที่เป็นผู้นำในยุคดิจิทัล"
                    </blockquote>
                    <h4 className="mt-4">เป้าหมาย</h4>
                    <ul className="list-group">
                        <li className="list-group-item">ส่งเสริมความคิดสร้างสรรค์</li>
                        <li className="list-group-item">พัฒนาทักษะด้านเทคโนโลยีสารสนเทศ</li>
                        <li className="list-group-item">สร้างความเชี่ยวชาญในสายอาชีพ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
