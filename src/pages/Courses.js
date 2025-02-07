import React from "react";

function Courses() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4">หลักสูตรที่เปิดสอน</h1>
                <p className="lead">
                    เรามีหลักสูตรที่ทันสมัยเพื่อพัฒนาความเชี่ยวชาญด้านเทคโนโลยี
                </p>
            </div>

            <div className="row">
                {/* หลักสูตรเทคโนโลยีสารสนเทศ */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-primary">หลักสูตรเทคโนโลยีสารสนเทศ</h5>
                            <p className="card-text">
                                เรียนรู้ด้านโปรแกรมมิ่ง, การจัดการข้อมูล และการพัฒนาแอปพลิเคชัน
                            </p>
                            {/* แสดงตัวอย่าง PDF */}
                            <div className="mb-3">
                                <iframe
                                    src="/ooo.pdf"
                                    title="Preview IT Curriculum"
                                    width="100%"
                                    height="400px"
                                    style={{ border: "1px solid #ccc" }}
                                ></iframe>
                            </div>
                            {/* ปุ่มดาวน์โหลด PDF */}
                            <a 
                                href="/ooo.pdf" 
                                className="btn btn-primary" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                ดาวน์โหลดหลักสูตร
                            </a>
                        </div>
                    </div>
                </div>

                {/* หลักสูตรคอมดิจิตอล */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-primary">หลักสูตรคอมดิจิตอล</h5>
                            <p className="card-text">
                                ฝึกการใช้คอมเบื้องต้น
                                ใช้โปรแกรมในการทำเอกสาร
                            </p>
                            {/* แสดงตัวอย่าง PDF */}
                            <div className="mb-3">
                                <iframe
                                    src="/ooo.pdf"
                                    title="Preview Digital Computer Curriculum"
                                    width="100%"
                                    height="400px"
                                    style={{ border: "1px solid #ccc" }}
                                ></iframe>
                            </div>
                            {/* ปุ่มดาวน์โหลด PDF */}
                            <a 
                                href="/ooo.pdf" 
                                className="btn btn-primary" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                ดาวน์โหลดหลักสูตร
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
