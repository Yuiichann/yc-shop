import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Box, Container } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Container>
          Test
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
