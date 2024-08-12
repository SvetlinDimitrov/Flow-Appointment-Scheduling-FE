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
    iconSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F003%2F678%2F261%2Foriginal%2Fquality-badge-icon-design-medal-and-ribbon-illustration-free-vector.jpg&f=1&nofb=1&ipt=d5ff6135512beda678db86e98259e025a718e0bb2d3699d0329f3672daabddbf&ipo=images",
    title: "Quality",
    description: "We deliver exceptional services using the finest techniques and products."
  },
  {
    iconSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Ftwo-hands-helping-another-people-helping-each-other_488220-26760.jpg&f=1&nofb=1&ipt=458540fe8bd021f387091de8a5fd53eb02aab3ef55cde9f1c83aa6778aeb31da&ipo=images",
    title: "Integrity",
    description: "We operate with honesty, transparency, and a deep respect for our clients."
  },
  {
    iconSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.htijobs.com%2Fwp-content%2Fuploads%2F2020%2F03%2Finnovation-scaled.jpeg&f=1&nofb=1&ipt=cfa7057a2bfc078b65c671ebb15dac160d334c705c31a1573e5887d88eba95f2&ipo=images",
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