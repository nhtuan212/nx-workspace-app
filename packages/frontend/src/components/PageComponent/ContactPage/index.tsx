import React from 'react';
import classNames from 'classnames';
import styles from './contactStyles.module.scss';

const ContactPage = () => {
    // Setup ClassName
    const iframeClassName = classNames('border-0 w-100', styles['iframe']);

    return (
        <div className="container">
            <div className="d-flex flex-wrap">
                <div className="sm:col-6 col-12 p-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.375458308522!2d106.76050591538858!3d10.8590211922655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275aa885ec27%3A0x1640a438ebbef921!2sQini!5e0!3m2!1svi!2s!4v1678358217003!5m2!1svi!2s"
                        className={iframeClassName}
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="sm:col-6 col-12 p-1">
                    <h3 className="title">Thông tin liên hệ</h3>
                    <div className="contact-list">
                        <div className="list-group mb-1">
                            <span>Địa chỉ chúng tôi</span>
                            <p className="fw-700">
                                51 Hoàng Diệu 2, Phường Linh Trung, Thành phố
                                Thủ Đức
                            </p>
                        </div>
                        <div className="list-group mb-1">
                            <span>Điện thoại</span>
                            <p className="fw-700">0938 04 00 98</p>
                        </div>
                        <div className="list-group mb-1">
                            <span>Email</span>
                            <p className="fw-700">nhtuan212@gmail.com</p>
                        </div>
                        <div className="list-group mb-1">
                            <span>Thời gian làm việc</span>
                            <p className="fw-700">9:00 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
