import TeamMember from "./team_member/TeamMember.tsx";
import {Header, JoinOurTeamButton, MainWrapper, Subheader, TeamMembersWrapper} from "./meetTeamSectionStyles.ts";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Lead Massage Therapist",
    description: "With over 10 years of experience, Jane specializes in deep tissue and sports massage, helping clients achieve optimal muscle recovery and relaxation.",
    imageSrc: "/static/images/about_us/male_user_icon.webp"
  },
  {
    name: "John Smith",
    role: "Fitness Instructor",
    description: "John is a certified fitness instructor with a passion for helping clients achieve their fitness goals through personalized training programs.",
    imageSrc: "/static/images/about_us/male_user_icon.webp"
  },
  {
    name: "Emily Johnson",
    role: "Yoga Instructor",
    description: "Emily is a dedicated yoga instructor who specializes in Vinyasa and Hatha yoga, helping clients find balance and peace through mindful practice.",
    imageSrc: "/static/images/about_us/female_user_icon.png"
  }
];

const MeetTeamSection = () => {
  return (
    <MainWrapper>
      <Header variant="h4">
        Meet Our Expert Team
      </Header>
      <Subheader variant="body1" paragraph>
        Our team is a group of passionate professionals dedicated to your wellness. From our skilled massage therapists
        to our energetic fitness instructors, every member of Flow brings a wealth of experience and a commitment to
        your well-being.
      </Subheader>
      <TeamMembersWrapper>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            imageSrc={member.imageSrc}
          />
        ))}
      </TeamMembersWrapper>
      <JoinOurTeamButton variant="contained" color="primary">
        Join Our Team
      </JoinOurTeamButton>
    </MainWrapper>
  );
};

export default MeetTeamSection;