// NotFoundPage.tsx or NotFoundPage.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1">
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Link to="/">Go Back Home</Link>
        </Box>
    );
};

export default NotFoundPage;
