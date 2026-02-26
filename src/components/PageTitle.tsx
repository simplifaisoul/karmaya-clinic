import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
    '/': 'Karmaya Clinics — Holistic Community Healthcare',
    '/about': 'About Us | Karmaya Clinics',
    '/team': 'Our Team | Karmaya Clinics',
    '/pillars': 'The 9 Steps to Wellness | Karmaya Clinics',
    '/exchange': 'Service Exchange Center | Karmaya Clinics',
    '/gallery': 'Impact Gallery | Karmaya Clinics',
    '/contact': 'Contact Us | Karmaya Clinics',
    '/resources': 'Resources | Karmaya Clinics',
    '/signin': 'Sign In | Karmaya Clinics',
    '/dashboard': 'My Dashboard | Karmaya Clinics',
};

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const title = pageTitles[location.pathname] || 'Karmaya Clinics';
        document.title = title;
    }, [location.pathname]);

    return null;
};

export default PageTitle;
