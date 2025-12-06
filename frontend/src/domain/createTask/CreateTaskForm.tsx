import { BaseForm } from '@base/form/BaseForm';
import { BaseFormField } from '@base/form/formField/BaseFormField';
import { BaseInput } from '@base/input/BaseInput';
import { BaseSelect } from '@base/select/BaseSelect';
import { BaseTextArea } from '@base/textarea/BaseTextArea';
import { useState } from 'react';
import {
  CATEGORY_OPTIONS,
  FILTER_OPTIONS,
  TAG_OPTIONS,
} from '@domain/createTask/createTaskOptions';

export function CreateTaskForm() {
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [filter, setFilter] = useState('');

  const titleError = title === '' ? 'タイトルを入力してください。' : undefined;
  const mainTextError = mainText === '' ? '本文を入力してください。' : undefined;
  const categoryError = category === '' ? 'カテゴリーを選択してください' : undefined;
  const tagError = tag === '' ? 'タグを設定してください。' : undefined;
  const filterError = filter === '' ? 'フィルターを設定してください' : undefined;

  return (
    <BaseForm
      onSubmit={(event) => {
        event.preventDefault();
        // 登録処理
      }}
    >
      <div className="form__header">
        <h1 className="form__title">新規タスク登録</h1>
        <p className="form__description">新しいタスクを登録します。</p>
      </div>

      <BaseFormField
        label="タイトル"
        htmlFor="title"
        required
        error={titleError}
        helpText="タスクのタイトルを入力してください。"
      >
        <BaseInput
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </BaseFormField>

      {/* selectフィールドを 2 カラムに */}
      <div className="grid gap-4 md:grid-cols-2">
        <BaseFormField
          label="タグ"
          htmlFor="tag"
          required
          error={tagError}
          helpText="タスクのタグを選択してください。"
        >
          <BaseSelect id="tag" value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="">選択してください。</option>
            {TAG_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </BaseSelect>
        </BaseFormField>

        <BaseFormField
          label="カテゴリー"
          htmlFor="category"
          required
          error={categoryError}
          helpText="タスクのカテゴリーを選択してください。"
        >
          <BaseSelect id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">選択してください。</option>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </BaseSelect>
        </BaseFormField>

        <BaseFormField
          label="フィルター"
          htmlFor="filter"
          required
          error={filterError}
          helpText="タスクのフィルターを選択してください。"
        >
          <BaseSelect id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">選択してください。</option>
            {FILTER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </BaseSelect>
        </BaseFormField>
      </div>

      <BaseFormField
        label="本文"
        htmlFor="mainText"
        required
        error={mainTextError}
        helpText="タスクの本文を入力してください。"
      >
        <BaseTextArea
          id="mainText"
          required
          value={mainText}
          onChange={(e) => setMainText(e.target.value)}
        />
      </BaseFormField>
    </BaseForm>
  );
}
