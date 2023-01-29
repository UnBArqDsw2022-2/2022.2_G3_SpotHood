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

  action: Dispatch<SetStateAction<any>>;
}

const Icon: React.FC<Props> = ({ name, action }) => {
  switch (name) {
    case 'dns': return <Dns onClick={action} />
    case 'storefront': return <Storefront onClick={action} />
    case 'account-tree': return <AccountTree onClick={action} />
    case 'home-work': return <HomeWork onClick={action} />
    case 'blur-on': return <BlurOn onClick={action} />
    case 'expand_more': return <ExpandMore onClick={action} />
    case 'expand_less': return <ExpandLess onClick={action} />
    case 'menu': return <Menu onClick={action} />
    case 'menu-open': return <MenuOpen onClick={action} />
    case 'account-circle': return <AccountCircle onClick={action} />
    case 'apps': return <Apps onClick={action} />
    case 'arrow-back': return <ArrowBack onClick={action} />
    case 'arrow-forward': return <ArrowForward onClick={action} />
    case 'close': return <Close onClick={action} />
    case 'school': return <School onClick={action} />
    case 'logout': return <Logout onClick={action} />
    case 'notifications': return <Notifications onClick={action} />
    case 'event-busy': return <EventBusy onClick={action} />
    case 'chevron-left': return <ChevronLeft onClick={action} />
    case 'chevron-right': return <ChevronRight onClick={action} />
    case 'check-box-blank': return <CheckBoxOutlineBlank onClick={action} />
    case 'check-box': return <CheckBox onClick={action} />
    case 'double-arrow-right': return <DoubleArrow onClick={action} />
    case 'menu-book': return <MenuBook onClick={action} />
    case 'warning': return <Warning onClick={action} />
    case 'info-icon': return <Info onClick={action} />
    case 'dangerous-icon': return <Dangerous onClick={action} />
    case 'check-circle-icon': return <CheckCircle onClick={action} />
    case 'security': return <Security onClick={action} />
    case 'route': return <Route onClick={action} />
    case 'calendar': return <CalendarMonth onClick={action} />
    case 'done': return <Done onClick={action} />
    case 'edit': return <Edit onClick={action} />
    case 'folder': return <Folder onClick={action} />
    case 'folder-create': return <CreateNewFolder onClick={action} />
    case 'folder-special': return <FolderSpecial onClick={action} />
    case 'file': return <Description onClick={action} />
    case 'file-download': return <FileDownload onClick={action} />
    case 'file-upload': return <FileUpload onClick={action} />
    case 'recording': return <EmergencyRecording onClick={action} />
    case 'timeline': return <Timeline onClick={action} />
    case 'video': return <VideoLibrary onClick={action} />
    case 'book': return <Book onClick={action} />
    case 'pending-actions': return <PendingActions onClick={action} />
    case 'star': return <Star onClick={action} />
    case 'settings': return <Settings onClick={action} />
    case 'engineering': return <Engineering onClick={action} />
    case 'schedule': return <Schedule onClick={action} />
    case 'link': return <Link onClick={action} />
    case 'key': return <Key onClick={action} />
    case 'add-circle': return <AddCircle onClick={action} />
    case 'add': return <Add onClick={action} />
    case 'delete': return <Delete onClick={action} />
    case 'remove': return <Remove onClick={action} />
    case 'cancel': return <Cancel onClick={action} />
    case 'reader': return <ChromeReaderMode onClick={action} />
    case 'assigment': return <Assignment onClick={action} />
    case 'toggle-on': return <ToggleOn onClick={action} />
    case 'toggle-off': return <ToggleOff onClick={action} />
    default: return <HelpOutline onClick={action} />
  }
}

export default Icon