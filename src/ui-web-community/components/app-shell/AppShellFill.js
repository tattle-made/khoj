import React, { useState, useEffect } from "react";
import { Grommet, ResponsiveContext, Box } from "grommet";
import { SimpleHeader } from "@bit/tattle-tech.core-ui.header";
import { SimpleFooter } from "@bit/tattle-tech.core-ui.footer";
import { Theme } from "@bit/tattle-tech.core-ui.theme";
import { SEO } from "@bit/tattle-tech.core-ui.seo";
// import SEO from "./s";

/**
 * @author
 * @function ContentPageLayout
 **/

const AppShellFill = ({
  children,
  footerItems,
  headerLabel,
  headerTarget,
  primaryNav,
  expandCenter,
}) => (
  <Grommet theme={Theme} full>
    <SEO title={`Tattle - ${headerLabel}`} />
    <Box fill>
      <Box flex={false} as={"header"}>
        <SimpleHeader
          label={headerLabel}
          target={headerTarget}
          primaryNav={primaryNav}
          showNav={true}
        />
      </Box>

      <Box overflow={"auto"}>
        <ContentPageLayout>{children}</ContentPageLayout>
      </Box>
    </Box>
  </Grommet>
);

const ContentPageLayout = ({ children }) => (
  <Box fill pad={"small"} margin={{ top: "large", bottom: "large" }}>
    {children}
  </Box>
);

export default AppShellFill;
