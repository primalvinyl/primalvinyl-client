import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    .cookieConsent {
        .contentWrapper {
            padding: .5em 1em 1em 1em;
            font-weight: normal;

            p {
                margin: 0 0 .8em 0;
            }

            h3 {
                font-size: 1.8em;
            }
        }
        .buttonWrapper {
            padding: 0 2em 1em 1em;
        }
    }
`;

const CookieModal = ({ expires }: CookieModalProps): React.ReactElement => {
    return (
        <Wrapper>
            <CookieConsent
                containerClasses="cookieConsent"
                contentClasses="contentWrapper"
                buttonWrapperClasses="buttonWrapper"
                location="bottom"
                buttonText="Accept"
                cookieName="trackingconsent"
                overlay={true}
                expires={expires}>
                <h3>
                    We Use Cookies
                </h3>
                <p>
                    By clicking the Accept button, you agree to our and our parter's use of cookies and other technologies to process your data to personalise your experience and deliver tailored advertising to you, on and off our site.
                </p>
                <p>
                    To find out more, please read our <Link to="/terms-of-service">privacy policy</Link>.
                </p>
            </CookieConsent>
        </Wrapper>
    );
};

type CookieModalProps = {
    readonly expires?: number;
};

CookieModal.defaultProps = {
    expires: 150
};

export default CookieModal;
