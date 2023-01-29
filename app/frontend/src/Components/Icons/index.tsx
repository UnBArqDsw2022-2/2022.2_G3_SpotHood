import {
  Add, AddCircle, AccountCircle,
  AccountTree, Apps,
  ArrowBack, ArrowForward,
  Book, BlurOn,
  CheckCircle, CreateNewFolder,
  CalendarMonth, Close, ChevronRight,
  ChevronLeft, CheckBoxOutlineBlank,
  CheckBox, Dangerous, Description,
  Done, Dns, DoubleArrow, Delete,
  Edit, EmergencyRecording, EventBusy,
  ExpandLess, ExpandMore, Engineering,
  Folder, FolderSpecial, FileDownload,
  FileUpload, HelpOutline, HomeWork,
  Info, Key, Logout, Link, Menu,
  MenuOpen, MenuBook, Notifications,
  PendingActions, Route, Remove,
  Star, School, Security, Storefront,
  Settings, Schedule, Timeline,
  ToggleOn, ToggleOff, VideoLibrary,
  Warning, Cancel, ChromeReaderMode,
  Assignment, 
} from '@mui/icons-material';

import { Dispatch, SetStateAction } from "react";
import React from "react";

interface Props {
  name: string;
  style: React.CSSProperties;

  action: Dispatch<SetStateAction<any>>;
}

const Icon: React.FC<Props> = ({ name, action, style }) => {
  switch (name) {
    case 'dns': return <Dns onClick={action} style={style} />
    case 'storefront': return <Storefront onClick={action} style={style} />
    case 'account-tree': return <AccountTree onClick={action} style={style} />
    case 'home-work': return <HomeWork onClick={action} style={style} />
    case 'blur-on': return <BlurOn onClick={action} style={style} />
    case 'expand_more': return <ExpandMore onClick={action} style={style} />
    case 'expand_less': return <ExpandLess onClick={action} style={style} />
    case 'menu': return <Menu onClick={action} style={style} />
    case 'menu-open': return <MenuOpen onClick={action} style={style} />
    case 'account-circle': return <AccountCircle onClick={action} style={style} />
    case 'apps': return <Apps onClick={action} style={style} />
    case 'arrow-back': return <ArrowBack onClick={action} style={style} />
    case 'arrow-forward': return <ArrowForward onClick={action} style={style} />
    case 'close': return <Close onClick={action} style={style} />
    case 'school': return <School onClick={action} style={style} />
    case 'logout': return <Logout onClick={action} style={style} />
    case 'notifications': return <Notifications onClick={action} style={style} />
    case 'event-busy': return <EventBusy onClick={action} style={style} />
    case 'chevron-left': return <ChevronLeft onClick={action} style={style} />
    case 'chevron-right': return <ChevronRight onClick={action} style={style} />
    case 'check-box-blank': return <CheckBoxOutlineBlank onClick={action} style={style} />
    case 'check-box': return <CheckBox onClick={action} style={style} />
    case 'double-arrow-right': return <DoubleArrow onClick={action} style={style} />
    case 'menu-book': return <MenuBook onClick={action} style={style} />
    case 'warning': return <Warning onClick={action} style={style} />
    case 'info-icon': return <Info onClick={action} style={style} />
    case 'dangerous-icon': return <Dangerous onClick={action} style={style} />
    case 'check-circle-icon': return <CheckCircle onClick={action} style={style} />
    case 'security': return <Security onClick={action} style={style} />
    case 'route': return <Route onClick={action} style={style} />
    case 'calendar': return <CalendarMonth onClick={action} style={style} />
    case 'done': return <Done onClick={action} style={style} />
    case 'edit': return <Edit onClick={action} style={style} />
    case 'folder': return <Folder onClick={action} style={style} />
    case 'folder-create': return <CreateNewFolder onClick={action} style={style} />
    case 'folder-special': return <FolderSpecial onClick={action} style={style} />
    case 'file': return <Description onClick={action} style={style} />
    case 'file-download': return <FileDownload onClick={action} style={style} />
    case 'file-upload': return <FileUpload onClick={action} style={style} />
    case 'recording': return <EmergencyRecording onClick={action} style={style} />
    case 'timeline': return <Timeline onClick={action} style={style} />
    case 'video': return <VideoLibrary onClick={action} style={style} />
    case 'book': return <Book onClick={action} style={style} />
    case 'pending-actions': return <PendingActions onClick={action} style={style} />
    case 'star': return <Star onClick={action} style={style} />
    case 'settings': return <Settings onClick={action} style={style} />
    case 'engineering': return <Engineering onClick={action} style={style} />
    case 'schedule': return <Schedule onClick={action} style={style} />
    case 'link': return <Link onClick={action} style={style} />
    case 'key': return <Key onClick={action} style={style} />
    case 'add-circle': return <AddCircle onClick={action} style={style} />
    case 'add': return <Add onClick={action} style={style} />
    case 'delete': return <Delete onClick={action} style={style} />
    case 'remove': return <Remove onClick={action} style={style} />
    case 'cancel': return <Cancel onClick={action} style={style} />
    case 'reader': return <ChromeReaderMode onClick={action} style={style} />
    case 'assigment': return <Assignment onClick={action} style={style} />
    case 'toggle-on': return <ToggleOn onClick={action} style={style} />
    case 'toggle-off': return <ToggleOff onClick={action} style={style} />
    default: return <HelpOutline onClick={action} style={style} />
  }
}

export default Icon