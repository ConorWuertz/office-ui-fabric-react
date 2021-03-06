/* tslint:disable */
import * as React from 'react';
import { css, styled } from '../../../Utilities';
/* tslint:enable */
import { BasePicker } from '../BasePicker';
import { IBasePickerProps, IBasePickerStyleProps, IBasePickerStyles } from '../BasePicker.types';
import { getStyles } from '../BasePicker.styles';
import { TagItem, ITagItemProps } from './TagItem';
import * as stylesImport from './TagItem.scss';
const styles: any = stylesImport;

export interface ITag {
  key: string;
  name: string;
}

export interface ITagPickerProps extends IBasePickerProps<ITag> {}

export class TagPickerBase extends BasePicker<ITag, ITagPickerProps> {
  public static defaultProps = {
    onRenderItem: (props: ITagItemProps) => {
      return <TagItem {...props}>{props.item.name}</TagItem>;
    },
    onRenderSuggestionsItem: (props: ITag) => (
      <div className={css('ms-TagItem-TextOverflow', styles.tagItemTextOverflow)}> {props.name} </div>
    )
  };
}

export const TagPicker = styled<ITagPickerProps, IBasePickerStyleProps, IBasePickerStyles>(TagPickerBase, getStyles, undefined, {
  scope: 'TagPicker'
});
