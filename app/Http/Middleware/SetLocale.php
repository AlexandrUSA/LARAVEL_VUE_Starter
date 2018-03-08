<?php

namespace App\Http\Middleware;

use Closure;

class SetLocale
{
    /**
     * Устанавливает новый язык для приложения
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Если переданный locale есть в списке разрешенных locales
        if ($locale = $this->parseLocale($request)) {
            app()->setLocale($locale);  // Устанавливаем его
        }

        return $next($request); // След. посредник
    }

    /**
    Функция проверяет, естьли в списке locales конфига переданный locale
     * @param  \Illuminate\Http\Request $request
     * @return string|null
     */
    protected function parseLocale($request)
    {
        $locales = config('app.locales'); 

        $locale = $request->server('HTTP_ACCEPT_LANGUAGE'); 
        $locale = substr($locale, 0, strpos($locale, ',') ?: strlen($locale));

        if (array_key_exists($locale, $locales)) {
            return $locale;
        }

        if (array_key_exists($locale, $locales)) {
            return $locale;
        }

        $locale = substr($locale, 0, 2);
        if (array_key_exists($locale, $locales)) {
            return $locale;
        }
    }
}
