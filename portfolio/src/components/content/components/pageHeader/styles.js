export const topContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50%",
  flexDirection: "column",
};

export const captionStyles = (typography, color) => ({
  fontWeight: typography.fontWeightBold,
  color: color,
  mx: 0.3,
});

export const containerCaptionStyles = {
  display: "flex",
  backgroundColor: "primary.main",
  px: 0.5,
  borderRadius: "5px",
};

export const titleContainerStyles = {
  pb: 0.5,
  width: "30%",
};

export const subtitleContainerStyles = {
  mt: 0,
  width: "30%",
};

export const titleStyles = (typography) => ({
  fontSize: typography.h2,
  fontWeight: typography.fontWeightBold,
});

export const titleHeaderStyles = (typography) => ({
  fontSize: typography.body1,
  fontWeight: typography.light,
});

export const boxStyles = {
  width: "30%",
  zIndex: 1001,
  mb: 1,
};

export const bar1Styles = {
  width: "80%",
  height: "10px",
  backgroundColor: "warning.main",
};

export const bar2Styles = {
  width: "70%",
  height: "10px",
  backgroundColor: "error.main",
};

export const bar3Styles = {
  width: "60%",
  height: "10px",
  backgroundColor: "info.main",
};
