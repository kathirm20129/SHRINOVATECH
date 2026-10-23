import WebsiteDevelopment from './WebsiteDevelopment';
import SaaSDevelopment from './SaaSDevelopment';
import ApplicationDevelopment from './ApplicationDevelopment';
import CybersecurityService from './CybersecurityService';
import DigitalMarketingService from './DigitalMarketingService';
import FinalYearProjects from './FinalYearProjects';
import ResumeLinkedInService from './ResumeLinkedInService';
import JobTipsService from './JobTipsService';
import CareerGuidanceService from './CareerGuidanceService';

export const serviceComponentsMap = {
  'web-dev': WebsiteDevelopment,
  'saas-dev': SaaSDevelopment,
  'app-dev': ApplicationDevelopment,
  'cybersecurity': CybersecurityService,
  'digital-marketing': DigitalMarketingService,
  'final-year-projects': FinalYearProjects,
  'resume-linkedin': ResumeLinkedInService,
  'job-tips': JobTipsService,
  'career-guidance': CareerGuidanceService,
};

export {
  WebsiteDevelopment,
  SaaSDevelopment,
  ApplicationDevelopment,
  CybersecurityService,
  DigitalMarketingService,
  FinalYearProjects,
  ResumeLinkedInService,
  JobTipsService,
  CareerGuidanceService,
};
