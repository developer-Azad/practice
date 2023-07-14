import { Grid, GridProps } from '@chakra-ui/react';

export const GridContainer = ({ children, ...r }: GridProps) => {
  return (
    <Grid layerStyle='sharedGrid' {...r}>
      {children}
    </Grid>
  );
};
