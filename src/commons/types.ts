export type UserData = {
  id: string;
  name: string;
  profilePic: string;
  jobRole: string;
  pronouns: string;
  bio: string;

  exp: {
    timeline: string;
    title: string;
    description: string;
  };

  achievements: {
    time: string;
    title: string;
    description: string;
  };
  
  contact: {
    instagramID: string;
    twitterID: string;
    linkedInID: string;
    githubID: string;
    email: string;
  };
};
