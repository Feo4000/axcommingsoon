import React from "react";
import "./TermsOfService.css";

const TermsOfService = () => {
    return (
        <div className="terms-container">
            <div className="terms-header">
                <h1>Terms of Service</h1>
            </div>
            <div className="terms-content">
                <p>
                    Welcome to <strong>AnnotateX</strong>. By accessing or using our services, you agree to comply
                    with and be bound by the following Terms of Service. Please read them carefully.
                </p>
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By using our platform, you agree to these terms. If you do not agree, please refrain from using
                    our services.
                </p>
                <h2>2. Use of Our Services</h2>
                <ul>
                    <li>Users must provide accurate and up-to-date information when subscribing or registering.</li>
                    <li>Any misuse of our platform is strictly prohibited.</li>
                </ul>
                <h2>3. Intellectual Property</h2>
                <p>
                    All content, trademarks, and design elements on this platform are the property of AnnotateX
                    unless otherwise stated. Unauthorized use is prohibited.
                </p>
                <h2>4. Limitation of Liability</h2>
                <p>
                    AnnotateX is not responsible for any direct or indirect damages resulting from your use of our
                    platform.
                </p>
                <h2>5. Changes to Terms</h2>
                <p>
                    We reserve the right to update these Terms of Service at any time. Continued use of our services
                    constitutes acceptance of the updated terms.
                </p>
                <h2>Contact Us</h2>
                <p>
                    If you have questions or concerns about these Terms of Service, please contact us at
                    <a href="mailto:annotatexbg@gmail.com"> annotatexbg@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
