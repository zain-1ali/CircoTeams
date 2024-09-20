import { ReactNode } from "react";

export interface ImageProps {
  classes?: string;
  src?: string;
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
  onChange: () => void;
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
  imgClass?: string;
  containerClass?: string;
  src?: string;
}

export interface prflLogoImgProps {
  profileClasses?: string;
  logoClasses?: string;
  profile?: string;
  logo?: string;
  showLogo?: boolean;
}

export interface prflCardProps {
  isCreatePrfl?: boolean;
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
}

export interface phoneInputProps {
  labelClasses?: string;
  flagBtnHeight?: string;
  flagBtnWidth?: string;
  inputClasses?: string;
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
