'use client'
import { Box, Typography, useTheme  } from "@mui/material";
import { tokens } from "@/app/theme";

type HeaderProps = {
  title: string,
  subtitle: string,
}

const Header = ( {title, subtitle}: HeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography 
        variant='h2' 
        color={colors.grey[100]} 
        fontWeight='bold'
        sx={{ mb:'5px' }}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color='crimson'
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header