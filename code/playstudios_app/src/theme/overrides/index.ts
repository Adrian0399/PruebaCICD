import { Theme } from '@mui/material/styles';
import Button from './Button';
import Typography from './Typography';
import Paper from './Paper';
import BottomNavigationAction from './BottomNavigationAction';
import Card from './Card';
import CardContent from './CardContent';
import Container from './Container';
import Toolbar from './Toolbar';
import DatePickerStatic from './DatePickerStatic';
import Input from './Input';
import Tab from './Tab';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Paper(theme),
    Card(theme),
    Toolbar(theme),
    CardContent(theme),
    BottomNavigationAction(theme),
    Container(theme),
    Typography(theme),
    DatePickerStatic(theme),
    Input(theme),
    Tab(theme),
  );
}
