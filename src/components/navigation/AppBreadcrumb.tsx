import { Link as RouterLink, useLocation } from "react-router";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const breadcrumbNameMap: { [key: string]: string } = {
  '/generators': 'Generators',
  '/generators/blob': 'Blob',
};

export default function AppBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  } else {
    return (
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          mt: 1,
          mb: 4,
          px: 4,
          py: 1,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          boxShadow: (theme) => theme.shadows[2]
        }}
      >
        {pathnames.map((_value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography key={to} sx={{ color: 'text.primary' }}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <Link underline="hover" color="inherit" component={RouterLink} to={to} key={to}>
              {breadcrumbNameMap[to]}
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  }

}
