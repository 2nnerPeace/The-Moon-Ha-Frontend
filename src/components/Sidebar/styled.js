import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
    position: relative;
    width: 220px;
    list-style: none;
    transition: all 0.5s ease;
    padding-top: 30px;
    background-color: ${colors.white};
`;

export const SidebarWrapper = styled.div`
    padding: 5dvh 5dvw;
    margin-top: 15dvh;
`;

export const SidebarMenu = styled.ul`
    list-style: none;
    padding: 0;
`;

export const SidebarLinkIcon = styled.img`
    width: 24px;
    height: auto;
`;