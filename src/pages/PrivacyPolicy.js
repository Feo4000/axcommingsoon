import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <h1>Privacy Policy</h1>
            </div>
            <div className="privacy-policy-content">
                <p>
                    At <strong>AnnotateX</strong>, your privacy is our priority. This Privacy Policy outlines
                    the types of information we collect and how we use, store, and protect your personal data.
                </p>
                <h2>Information We Collect</h2>
                <ul>
                    <li><strong>Email Address:</strong> Collected when you subscribe to updates or contact us.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our platform.</li>
                </ul>
                <h2>How We Use Your Information</h2>
                <p>
                    We use your personal information to:
                    <ul>
                        <li>Provide updates and notifications about our services.</li>
                        <li>Improve our platform through user feedback and analytics.</li>
                        <li>Ensure compliance with legal obligations.</li>
                    </ul>
                </p>
                <h2>Data Protection</h2>
                <p>
                    Your data is stored securely and only accessible by authorized personnel. We use industry-standard
                    practices to protect your information from unauthorized access, disclosure, or misuse.
                </p>
                <h2>Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy or your data, please reach out to us at
                    <a href="mailto:annotatexbg@gmail.com"> annotatexbg@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
