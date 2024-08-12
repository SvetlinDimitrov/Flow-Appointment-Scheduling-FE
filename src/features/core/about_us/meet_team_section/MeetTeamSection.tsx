import {Box, Button, Typography} from '@mui/material';
import TeamMember from "./team_member/TeamMember.tsx";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Massage Therapist",
    description: "With over 10 years of experience, Jane specializes in deep tissue and sports massage, helping clients achieve optimal muscle recovery and relaxation.",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
  },
  {
    name: "John Smith",
    role: "Fitness Instructor",
    description: "John is a certified fitness instructor with a passion for helping clients achieve their fitness goals through personalized training programs.",
    imageSrc: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
  },
  {
    name: "Emily Johnson",
    role: "Yoga Instructor",
    description: "Emily is a dedicated yoga instructor who specializes in Vinyasa and Hatha yoga, helping clients find balance and peace through mindful practice.",
    imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Favatars-21%2F512%2Favatar-circle-human-female-2-1024.png&f=1&nofb=1&ipt=c443f2fde7888a5d8fbc084a1f97aac8143a6cd6b78f00e6f265c4b8df44fa58&ipo=images"
  }
];

const MeetTeamSection = () => {
  return (
    <Box sx={{
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 4,
      p: 4
    }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Meet Our Expert Team
      </Typography>
      <Typography variant="body1" paragraph>
        Our team is a group of passionate professionals dedicated to your wellness. From our skilled massage therapists
        to our energetic fitness instructors, every member of Flow brings a wealth of experience and a commitment to
        your well-being.
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4}}>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            imageSrc={member.imageSrc}
          />
        ))}
      </Box>
      <Button variant="contained" color="primary" sx={{mt: 4}}>
        Join Our Team
      </Button>
    </Box>
  );
};

export default MeetTeamSection;