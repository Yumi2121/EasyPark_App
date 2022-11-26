import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 56px)', overflow: 'scroll initial', position: 'fixed' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/bookings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Bookings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;