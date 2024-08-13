import {Box, Typography} from '@mui/material';
import MissionValueItem from './mission_value_item/MissionValueItem';
import {
  headerStyle,
  mainWrapperStyle,
  missionValueWrapperStyle,
  secondaryWrapperStyle,
  subheaderStyle
} from "./missionValuesSectionStyles.ts";

const missionValues = [
  {
    iconSrc: "/static/images/about_us/quality_icon.jpg",
    title: "Quality",
    description: "We deliver exceptional services using the finest techniques and products."
  },
  {
    iconSrc: "/static/images/about_us/integrity_icon.jpg",
    title: "Integrity",
    description: "We operate with honesty, transparency, and a deep respect for our clients."
  },
  {
    iconSrc: "/static/images/about_us/innovation_icon.jpeg",
    title: "Innovation",
    description: "We continually evolve to bring the latest trends and innovations in wellness."
  }
];

const MissionValuesSection = () => {
  return (
    <Box sx={mainWrapperStyle}>
      <Box sx={secondaryWrapperStyle}>
        <Typography variant="h4" component="h2" gutterBottom sx={headerStyle}>
        Our Mission and Values
      </Typography>
        <Typography variant="body1" paragraph sx={subheaderStyle}>
        At Flow, our mission is to enhance the well-being of every individual we serve through personalized wellness
        solutions. We are committed to creating an environment that fosters health, relaxation, and a sense of
        community.
      </Typography>
        <Box sx={missionValueWrapperStyle}>
          {missionValues.map((value, index) => (
            <MissionValueItem
              key={index}
              iconSrc={value.iconSrc}
              title={value.title}
              description={value.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MissionValuesSection;