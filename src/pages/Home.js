import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
function Home() {
    const settings = {
        dots: true, // แสดงจุดสำหรับเลื่อน
        infinite: true, // เลื่อนแบบวนลูป
        speed: 500, // ความเร็วในการเลื่อน (มิลลิวินาที)
        slidesToShow: 1, // แสดง 1 รูปต่อครั้ง
        slidesToScroll: 1, // เลื่อนทีละ 1 รูป
        arrows: true, // แสดงปุ่มลูกศรเลื่อนซ้าย-ขวา
    };

    // ใช้ process.env.PUBLIC_URL เพื่อให้ React โหลดภาพจาก public/
    const imagePaths = [
        `${process.env.PUBLIC_URL}/1.jpg`,
        `${process.env.PUBLIC_URL}/2.jpg`,
        `${process.env.PUBLIC_URL}/3.jpg`,
        `${process.env.PUBLIC_URL}/4.jpg`
    ];

    console.log("Image Paths:", imagePaths); // ตรวจสอบว่า path ถูกต้อง

    return (
        <div className="container py-5">
            {/* ส่วนข้อความต้อนรับ */}
            <div className="text-center mb-4">
                <h1 className="display-4">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
                <p className="lead">
                    สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาทักษะด้านเทคโนโลยีสมัยใหม่
                    เพื่อสร้างนักศึกษาที่มีความพร้อมในโลกดิจิทัล
                </p>
            </div>

            {/* ส่วนแสดงรูป */}
            <div className="image-slider-container mb-5">
                <Slider {...settings}>
                    {imagePaths.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`IT ${index + 1}`}
                                className="slider-image w-100 rounded"
                                onError={(e) => {
                                    console.error("Image load error:", image);
                                    e.target.style.display = "none";
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* ส่วนปรัชญา */}
            <div className="philosophy-container text-center py-4">
                <h3 className="mb-3">ปรัชญาของสาขา</h3>
                <p className="text-muted">
                    "สร้างความรู้และนวัตกรรม เพื่อนำเทคโนโลยีสารสนเทศไปใช้ให้เกิดประโยชน์สูงสุด
                    ต่อสังคมและเศรษฐกิจ"
                </p>
                <p className="text-muted">
                    เรามุ่งเน้นการสร้างนักศึกษาที่มีความเชี่ยวชาญในด้านการพัฒนาเทคโนโลยี 
                    พร้อมที่จะเผชิญกับความท้าทายของโลกดิจิทัลในปัจจุบันและอนาคต
                </p>
            </div>
        </div>
    );
}

export default Home;