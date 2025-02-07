import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);  // Set to true to show "สมัครเสร็จสิ้น"
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4">ติดต่อเรา</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>ข้อมูลการติดต่อ</h3>
                    <p><strong>ที่อยู่:</strong> 1 ถนนป่าตัน อำเภอเมืองเชียงใหม่</p>
                    <p><strong>โทร:</strong> 053-412-362</p>
                    <p><strong>อีเมล:</strong> info@lpc.ac.th</p>
                </div>
                <div className="col-md-6">
                    <h3>แผนที่</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?..."
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Map"
                        className="rounded"
                    ></iframe>
                </div>
            </div>

            {/* ฟอร์มสมัครข้อมูล */}
            <div className="mt-5">
                <h3>สมัครข้อมูล</h3>
                {isSubmitted ? (
                    <div className="alert alert-success" role="alert">
                        สมัครเสร็จสิ้น
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">ชื่อ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">นามสกุล</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">ที่อยู่</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">อีเมล</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">เบอร์โทรศัพท์</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">ยืนยัน</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactUs;
