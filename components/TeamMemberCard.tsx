
import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-brand-light" />
      <h3 className="mt-4 text-xl font-bold text-brand-primary">{member.name}</h3>
      <p className="mt-1 text-brand-accent font-semibold">{member.role}</p>
      <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;
