import { BaseForm } from '@base/form/BaseForm';
import { BaseFormField } from '@base/form/formField/BaseFormField';
import { BaseInput } from '@base/input/BaseInput';
import { Button } from '@base/button/Button';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailError = email === '' ? 'メールアドレスを入力してください。' : undefined;
  const passwordError = password === '' ? 'パスワードを入力してください。' : undefined;

  return (
    <BaseForm
      onSubmit={(event) => {
        event.preventDefault(); //ログイン処理}}
      }}
    >
      <div className="form__header">
        <h1 className="form__title">ログイン</h1>
        <p className="form__description">FocusGrid Board にサインインします。</p>
      </div>

      <BaseFormField
        label="メールアドレス"
        htmlFor="email"
        required
        error={emailError}
        helpText="登録済みのメールアドレスを入力してください。"
      >
        <BaseInput
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </BaseFormField>

      <BaseFormField
        label="パスワード"
        htmlFor="password"
        required
        error={passwordError}
        helpText="パスワードを入力してください。"
      >
        <BaseInput
          id="password"
          type="password"
          autoComplete="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </BaseFormField>

      <div className="form__actions">
        <Button variant="primary" type="submit" fullWidth>
          ログイン
        </Button>
      </div>
    </BaseForm>
  );
}
