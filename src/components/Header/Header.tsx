import { Flex, Text, Image, NavLink, Badge } from '@mantine/core';
import LogoImage from '/src/assets/hh.png';
import UserIcon from '/src/assets/user-circle.svg';
import { Link, useMatch } from 'react-router';
import { NavLink as ReactRouterNavLink } from 'react-router';
import styles from './Header.module.scss';

const Header = () => {
  const match = useMatch('/*');

  return (
    <Flex px="20" py="15" bg={'#ffffff'} align={'center'} style={{ boxShadow: '0px 2px 22.5px 0px #1C1D1F0D' }}>
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
          rightSection={match?.pathname.match('/vacancies') && <Badge circle size="8px" color="indigo" />}
          to={'/vacancies'}
          component={ReactRouterNavLink}
          className={styles.navlink}
        />
        <NavLink
          noWrap
          label="Обо мне"
          component={ReactRouterNavLink}
          rightSection={match?.pathname === '/about' && <Badge circle size="8px" color="indigo" />}
          to={'/about'}
          leftSection={<Image src={UserIcon} width={24} />}
          className={styles.navlink}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
