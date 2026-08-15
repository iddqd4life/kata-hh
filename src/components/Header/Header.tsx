import { Flex, Text, Image, NavLink, Badge } from '@mantine/core';
import LogoImage from '/src/assets/hh.png';
import UserIcon from '/src/assets/user-circle.svg';
import { Link } from 'react-router';
import { NavLink as ReactRouterNavLink } from 'react-router';

const Header = () => (
  <Flex px="20" py="15" bg={'#ffffff'} style={{ boxShadow: '0px 2px 22.5px 0px #1C1D1F0D' }}>
    <Link to={'/'} style={{ textDecoration: 'none', color: 'unset' }}>
      <Flex align={'center'} gap={10}>
        <Image src={LogoImage} alt="hh" w={30} />
        <Text size={'16px'} fw={600}>
          .FrontEnd
        </Text>
      </Flex>
    </Link>
    <Flex mx={'auto'} align={'center'} gap={24}>
      <NavLink
        noWrap
        label="Вакансии FE"
        rightSection={<Badge circle size="8px" color="indigo" />}
        to={'/'}
        component={ReactRouterNavLink}
      />
      <NavLink
        noWrap
        disabled
        label="Обо мне"
        component={ReactRouterNavLink}
        to={'/about'}
        leftSection={<Image src={UserIcon} width={24} />}
      />
    </Flex>
  </Flex>
);

export default Header;
