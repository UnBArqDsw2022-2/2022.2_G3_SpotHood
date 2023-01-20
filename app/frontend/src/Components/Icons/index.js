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

const Icon = ({ name, style, className, onClick }) => {
  switch (name) {
    case 'dns': return <Dns className={className} onClick={onClick} style={style || {}} />
    case 'storefront': return <Storefront className={className} onClick={onClick} style={style || {}} />
    case 'account-tree': return <AccountTree className={className} onClick={onClick} style={style || {}} />
    case 'home-work': return <HomeWork className={className} onClick={onClick} style={style || {}} />
    case 'blur-on': return <BlurOn className={className} onClick={onClick} style={style || {}} />
    case 'expand_more': return <ExpandMore className={className} onClick={onClick} style={style || {}} />
    case 'expand_less': return <ExpandLess className={className} onClick={onClick} style={style || {}} />
    case 'menu': return <Menu className={className} onClick={onClick} style={style || {}} />
    case 'menu-open': return <MenuOpen className={className} onClick={onClick} style={style || {}} />
    case 'account-circle': return <AccountCircle className={className} onClick={onClick} style={style || {}} />
    case 'apps': return <Apps className={className} onClick={onClick} style={style || {}} />
    case 'arrow-back': return <ArrowBack className={className} onClick={onClick} style={style || {}} />
    case 'arrow-forward': return <ArrowForward className={className} onClick={onClick} style={style || {}} />
    case 'close': return <Close className={className} onClick={onClick} style={style || {}} />
    case 'school': return <School className={className} onClick={onClick} style={style || {}} />
    case 'logout': return <Logout className={className} onClick={onClick} style={style || {}} />
    case 'notifications': return <Notifications className={className} onClick={onClick} style={style || {}} />
    case 'event-busy': return <EventBusy className={className} onClick={onClick} style={style || {}} />
    case 'chevron-left': return <ChevronLeft className={className} onClick={onClick} style={style || {}} />
    case 'chevron-right': return <ChevronRight className={className} onClick={onClick} style={style || {}} />
    case 'check-box-blank': return <CheckBoxOutlineBlank className={className} onClick={onClick} style={style || {}} />
    case 'check-box': return <CheckBox className={className} onClick={onClick} style={style || {}} />
    case 'double-arrow-right': return <DoubleArrow className={className} onClick={onClick} style={style || {}} />
    case 'menu-book': return <MenuBook className={className} onClick={onClick} style={style || {}} />
    case 'warning': return <Warning className={className} onClick={onClick} style={style || {}} />
    case 'info-icon': return <Info className={className} onClick={onClick} style={style || {}} />
    case 'dangerous-icon': return <Dangerous className={className} onClick={onClick} style={style || {}} />
    case 'check-circle-icon': return <CheckCircle className={className} onClick={onClick} style={style || {}} />
    case 'security': return <Security className={className} onClick={onClick} style={style || {}} />
    case 'route': return <Route className={className} onClick={onClick} style={style || {}} />
    case 'calendar': return <CalendarMonth className={className} onClick={onClick} style={style || {}} />
    case 'done': return <Done className={className} onClick={onClick} style={style || {}} />
    case 'edit': return <Edit className={className} onClick={onClick} style={style || {}} />
    case 'folder': return <Folder className={className} onClick={onClick} style={style || {}} />
    case 'folder-create': return <CreateNewFolder className={className} onClick={onClick} style={style || {}} />
    case 'folder-special': return <FolderSpecial className={className} onClick={onClick} style={style || {}} />
    case 'file': return <Description className={className} onClick={onClick} style={style || {}} />
    case 'file-download': return <FileDownload className={className} onClick={onClick} style={style || {}} />
    case 'file-upload': return <FileUpload className={className} onClick={onClick} style={style || {}} />
    case 'recording': return <EmergencyRecording className={className} onClick={onClick} style={style || {}} />
    case 'timeline': return <Timeline className={className} onClick={onClick} style={style || {}} />
    case 'video': return <VideoLibrary className={className} onClick={onClick} style={style || {}} />
    case 'book': return <Book className={className} onClick={onClick} style={style || {}} />
    case 'pending-actions': return <PendingActions className={className} onClick={onClick} style={style || {}} />
    case 'star': return <Star className={className} onClick={onClick} style={style || {}} />
    case 'settings': return <Settings className={className} onClick={onClick} style={style || {}} />
    case 'engineering': return <Engineering className={className} onClick={onClick} style={style || {}} />
    case 'schedule': return <Schedule className={className} onClick={onClick} style={style || {}} />
    case 'link': return <Link className={className} onClick={onClick} style={style || {}} />
    case 'key': return <Key className={className} onClick={onClick} style={style || {}} />
    case 'add-circle': return <AddCircle className={className} onClick={onClick} style={style || {}} />
    case 'add': return <Add className={className} onClick={onClick} style={style || {}} />
    case 'delete': return <Delete className={className} onClick={onClick} style={style || {}} />
    case 'remove': return <Remove className={className} onClick={onClick} style={style || {}} />
    case 'cancel': return <Cancel className={className} onClick={onClick} style={style || {}} />
    case 'reader': return <ChromeReaderMode className={className} onClick={onClick} style={style || {}} />
    case 'assigment': return <Assignment className={className} onClick={onClick} style={style || {}} />
    case 'toggle-on': return <ToggleOn className={className} onClick={onClick} style={style || {}} />
    case 'toggle-off': return <ToggleOff className={className} onClick={onClick} style={style || {}} />
    default: return <HelpOutline className={className} onClick={onClick} style={style || {}} />
  }
}

export default Icon