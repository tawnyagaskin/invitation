/**
 * Copyright (c) 2024-present mrofisr
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// src/App.jsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import MainContent from '@/pages/MainContent';
import LandingPage from '@/pages/LandingPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import config from '@/config/config';

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{config.meta.title}</title>
        <meta name="title" content={config.meta.title} />
        <meta name="description" content={config.meta.description} />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href={config.meta.favicon} />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#A091F2" /> {/* sky-300 color */}

        <meta property="og:title" content="The Wedding of Sekar & Rizki" />
        <meta property="og:description"
          content="Pernikahan Sekar & Rizki. Yogyakarta, 10 Agustus 2025" />
        <meta property="og:image" content="https://www.seriez.web.id/images/cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Wedding of Sekar & Rizki" />
        <meta name="twitter:description"
          content="Pernikahan Sekar & Rizki. Yogyakarta, 10 Agustus 2025" />
        <meta name="twitter:image" content="https://www.seriez.web.id/images/cover.jpg" />

      </Helmet>

      <AnimatePresence mode='wait'>
        {!isInvitationOpen ? (
          <LandingPage onOpenInvitation={() => setIsInvitationOpen(true)} />
        ) : (
          <Layout>
            <MainContent />
          </Layout>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;