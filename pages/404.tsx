import React from 'react';
import Layout from '../components/Layout';
import { Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Layout title="Page Not Found">
      <Stack direction="column" height="100%" justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          component="section"
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap={1}
          paddingX={4}
        >
          <Typography variant="h5" fontWeight={500} letterSpacing={1} fontSize={24}>
            404
          </Typography>
          <Typography variant="h5" fontWeight={500} letterSpacing={1} fontSize={24}>
            |
          </Typography>
          <Typography variant="h5" fontWeight={500} letterSpacing={1} fontSize={24}>
            Page Not Found
          </Typography>
        </Stack>

        <Link href="/">
          <Button color="secondary" sx={{ width: '300px', marginTop: '20px' }}>
            Go Back
          </Button>
        </Link>
      </Stack>
    </Layout>
  );
};

export default Custom404;
