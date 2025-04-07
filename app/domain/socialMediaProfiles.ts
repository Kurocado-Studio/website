import { CursorVariants, SocialMediaLinks } from '~/domain/enums';
import type { SocialMediaProfile } from '~/domain/types';

export const socialMediaProfiles: Array<SocialMediaProfile> = [
  {
    title: 'LinkedIn',
    href: SocialMediaLinks.LINKEDIN,
    cursorVariant: CursorVariants.LINKEDIN,
  },
  {
    title: 'GitHub',
    href: SocialMediaLinks.GITHUB,
    cursorVariant: CursorVariants.GITHUB,
  },
];
