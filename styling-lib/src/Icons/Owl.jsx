import React from 'react';
import styled from 'styled-components';

const SvgIcon = styled.svg.attrs(() => ({
  x: 0,
  y: 0,
  viewBox: '0 0 100 100',
  'enable-background': 'new 0 0 100 100',
  xmlns: 'http://www.w3.org/2000/svg',
  version: '1.1',
}))`
  fill: black;
`;

const Owl = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M92.198,51.401L95,48.599L71.799,25.398l-10.9,10.9L50,25.398l-10.9,10.9l-10.899-10.9L5,48.599l2.802,2.802l20.398-20.398  l8.097,8.097L25.398,50L50,74.602L74.602,50l-10.9-10.9l8.097-8.097L92.198,51.401z M50,68.997L31.003,50L50,31.003L68.997,50  L50,68.997z"></path>
  </SvgIcon>
);

export default Owl;
