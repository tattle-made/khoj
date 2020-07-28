import React from "react"
import { primaryNav, footerItems } from "../config/options"
import { AppShell } from "@bit/tattle-tech.core-ui.app-shell"
/**
 * @author
 * @function DefaultLayout
 **/

const DefaultLayout = ({ children }) => (
  <AppShell
    headerLabel={"Khoj Community"}
    headerTarget={"/"}
    footerItems={footerItems}
    primaryNav={primaryNav}
    expandCenter={true}
  >
    {children}
  </AppShell>
)

export default DefaultLayout
