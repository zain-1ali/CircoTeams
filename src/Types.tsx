import { ReactNode } from "react";

export interface ImageProps {
  classes?: any;
  src?: any;
}

export interface LogoProps {
  Imgclasses?: string;
  containerClasses?: string;
}

export interface buttonProps {
  img?: string;
  text?: string;
  icon?: ReactNode;
  btnClasses?: string;
  imgClasses?: string;
  onClick: () => void;
}

export interface socialbuttonProps {
  isGoogle?: boolean;
  text?: string;
  btnClasses?: string;
  func: () => void;
}

export interface authSidebarProps {
  isSignin?: boolean;
}

export interface textProps {
  text: string;
  classes: string;
}

export interface inputProps {
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  classes?: string;
  placeholder?: string;
}

export interface inputWithLabelProps extends inputProps {
  label: string;
  inputClasses: string;
  labelClasses: string;
}

export interface checkboxProps extends inputProps {
  checkValue: boolean;
}

export interface checkboxTextProps {
  text: string;
  state: boolean;
  func: () => void;
  isSignin?: boolean | undefined;
}

export interface sidebarBtnProps {
  text: string;
  icon: string;
  hoverIcon: string;
  height?: string;
  onClick: () => void;
  state: boolean;
}

export interface prflBgImgProps {
  imgClass?: any;
  containerClass?: string;
  src?: any;
}

export interface prflLogoImgProps {
  profileClasses?: string;
  logoClasses?: string;
  profile?: any;
  logo?: any;
  showLogo?: boolean;
}

export interface prflCardProps {
  isCreatePrfl?: boolean;
  profile?: any;
  onClick?: any;
}

export interface profileCardProps {
  btnType?: number;
  action: () => void;
  btnClass: string;
  imgClass: string;
}

export interface imageSelectProps {
  image?: string;
  text: string;
  textClasses: string;
  imgClasses?: string;
  containerClasse?: string;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    imgType: string
  ) => void;
}

export interface phoneInputProps {
  labelClasses?: string;
  flagBtnHeight?: string;
  flagBtnWidth?: string;
  inputClasses?: string;
  value?: string;
  onChange: (e: string) => void;
}

export interface toggleAreaProps {
  text: string;
  width: string;
}

export interface colorSelectorProps {
  colorType: string;
}

export interface tableHeaderProps {
  text: string;
  width: string;
}

export interface textBtnProps {
  text: string;
  btnText: string;
  width: string;
}

export interface tableHeadProps {
  tableHeadCells: ReactNode[];
}

export interface tableProps {
  headers: ReactNode[];
  type: string;
}

export interface iconWithTextProps {
  icon: string;
  text: string;
  iconClass: string;
}

export interface imageWithTextProps {
  containerClass: string;
  isAdmin: boolean;
}

export interface SubTeamsGetStartedProps {
  createTeam: () => void;
}

export interface radioProps {
  classes: string;
}

export interface pageHeadProps {
  headerName: string;
  number: string | number;
}

export interface counterBoxProps {
  icon: string;
  count: string | number;
  text: string;
  iconStyle: string;
}

export interface contactOptionsProps {
  icon: string;
  heading: string;
  text: string;
  btnText: string;
}

export interface prfTextsProps {
  name: string;
  job: string;
  location: string;
  company: string;
}

export interface LoadingProps {
  bgColor: string;
}

// redux states types

export interface reduxSignupCreateProfileState {
  isSignupCreateProfile: boolean;
  signupCreateProfileStage: number;
}

export interface reduxEditSection {
  profileEditSectionStage: number;
}

export interface reduxTeamSection {
  teamSectionStage: number;
}

export interface Icon {
  name: string;
  img: string; // Assuming the image imports are string paths
  placeholder: string;
  linkID: number;
}

export interface IconGroup {
  name: string;
  links: Icon[];
}

export interface uploadIconProps {
  imgSrc: string | undefined;
  isShare: boolean;
}

export interface allLinksProps {
  changeLinkMode: (type: string) => void;
}

export interface addLinksProps extends allLinksProps {}

export interface webLinksProps extends allLinksProps {}

// profile interfaces

export interface ProfileDesign {
  appIconColor: string;
  backgroundColor: string;
  backgroundImage: string;
  backgroundOpacity: number;
  backgroundTheme: string;
  boxBackgroundColor: string;
  boxTextColor: string;
  hideCompanyLogo: boolean;
  hideSaveContact: boolean;
  highlightBoxStyle: string;
  profileFont: string;
  saveContactBackgroundColor: string;
  saveContactStyle: string;
  saveContactTextColor: string;
  weblinkButtonBackgroundColor: string;
  weblinkButtonTextColor: string;
  weblinkStyle: string;
  whiteProfileText: boolean;
  whiteTextAndBorder: boolean;
}

export interface Link {
  baseUrl?: string;
  email?: string;
  graphicTextColor?: string;
  id: string;
  image?: string | number;
  isLinkHighlighted: boolean;
  linkHighlightDescription?: string;
  linkID: number;
  name: string;
  placeholder?: string;
  shareable: boolean;
  textAlign?: string;
  title?: string;
  type?: string;
  value?: string;
}

export interface TagUid {
  activationDate: number;
  id: string;
  name: string;
  tagId: string;
  type: string;
}

export interface UserProfile {
  address: string;
  bio: string;
  company: string;
  coverUrl: string | null;
  direct: Link;
  directMode: boolean;
  dob: string;
  email: string;
  fcmToken: string;
  firstName: string;
  gender: string;
  hideSaveContact: boolean;
  id: string;
  isProMatching: boolean;
  isProVersion: boolean;
  isTrialPeriod: boolean;
  isVisible: boolean;
  jobTitle: string;
  lastName: string;
  leadMode: boolean;
  links?: Link[];
  logoUrl: string | null;
  name: string;
  parentID: string;
  phone: string;
  platform: string;
  proVersionExpiryDate: string;
  proVersionPurchaseDate: string;
  profileDesign: ProfileDesign;
  profileOn: number;
  profileSelected: string;
  profileTitle: string;
  profileUrl: string | null;
  qrColor: string;
  qrLogo: string;
  subscription: string;
  tagUid?: TagUid[];
  transactionId: string;
  userName: string;
  username: string;
  profileName: string;
}

export interface AuthLinksProps {
  links: Link[];
}
