import { BaseForm } from '@base/form/BaseForm';
import { BaseFormField } from '@base/form/formField/BaseFormField';
import { BaseInput } from '@base/input/BaseInput';
import { BaseTextArea } from '@base/textarea/BaseTextArea';
import { useState } from 'react';

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

      <BaseFormField
        label="タグ"
        htmlFor="tag"
        required
        error={tagError}
        helpText="タスクのタグを選択してください。"
      >
        <BaseInput id="tag" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      </BaseFormField>

      <BaseFormField
        label="カテゴリー"
        htmlFor="category"
        required
        error={categoryError}
        helpText="タスクのカテゴリーを選択してください。"
      >
        <BaseInput
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </BaseFormField>

      <BaseFormField
        label="フィルター"
        htmlFor="filter"
        required
        error={filterError}
        helpText="タスクのフィルターを選択してください。"
      >
        <BaseInput
          id="filter"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </BaseFormField>

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
