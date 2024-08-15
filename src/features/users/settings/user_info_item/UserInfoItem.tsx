import {ReactNode} from 'react';
import {Label, UserInfoItemWrapper, Value} from "./userInfoItemStyle.ts";

interface UserInfoItemProps {
  label: string;
  value: ReactNode;
}

const UserInfoItem = ({label, value}: UserInfoItemProps) => {
  return (
    <UserInfoItemWrapper>
      <Label variant="body1">
        {label}
      </Label>
      <Value variant="body2">
        {value}
      </Value>
    </UserInfoItemWrapper>
  );
};

export default UserInfoItem;