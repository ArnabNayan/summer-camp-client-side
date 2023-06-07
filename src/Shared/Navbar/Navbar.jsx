

const Navbar = () => {
    const navOption=<>
        <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
   
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navOption}
            </ul>
          </div>
          <div className="flex">
            <div>
                 <img className="rounded-full w-28 h-28" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACeCAMAAACcjZZYAAAA0lBMVEX///8MH0AAACwAADEAFTq4vcXX2d4AACoAADMAGDwAGj1bZXpYX3IAADRLVmoAAC7d4OVETWLIzNEADzfR09kAACYJHkEAGkF9f4+bn6gACzYLID/t7/IWKUYAEzoPIUMAACOepLLp6+4AABv29/g4Rl8AADgAEz6vtLymrLQADTUvPFcpNVC1vMF+hpWIkZ1rdIWUmqYrO1skMVR9iJBqdH8xQVkTJkgdL01ianlPVG8AF0K2vMchNE4AAB07SF94e48AABNTWmo+SWeGipvo5u4C+aP/AAAPhElEQVR4nO1dC3fauBL2C/wAY4NBgDFO4poAJeHR7g3Qdpfubvr//9IdyZItG5KSNqwD0XdOThMh22IszXzzkCpJAgICAgICAgICAgICAgICAgICAgICAgICAgJlI3DLHsE5I/5ULXsIZ4x4FkZlj+F8Edx9nJU9hvNF9Dk0G2UP4mwRDUM5XJY9inOFe6XJstovexhniioyZVm+rZQ9jvNEVcPSk41W2QM5S7THFpYeUgVv+QW0VAsR8Tllj+QcUbEHMoE1LHsoZ4iKKlMI2vdyTNQBE5//R9mDOTtMHTmFL2jfC3GjZNKT1fuyh3Nm6BuIE58uwlUvwopbuVh8cdkDOissMqtBaB8S4nsBHpXc3JPNUdkjOif08itXlr3/lT2kM8JSlYvieyx7TOeDfenJ9k3Zgzob1PalJzsiXHUc4oY9YITPSq2vKpK8x6Hpp2zZQjce5S2WiPYdg7jppwvW+lht2/TXmaB9RyB+8DLpfXWlCRWfJsJVRyCYZdLrXoG6W9C5KLKURyD4M2TCQ9oaG4sabfAXZY/t7SPapNKTwzWxFc0uNbyTsgf35uGutUx6mwA3xXcWFZ+gfT+Ba5mZ9B4SnvIDURLjC9r3PJJSAmpnZwFtpBFThIJyR/fW0fYz6X0cMZLXou6btSl1cG8eLd/KpNdMKXLfoOJrljm4N4+WrSEK2W5kDsac0j5N0L5nULHRFYNZ5z7YUiYjitN+CTvGW0SW8hcQsHiV3i57KP8hqu3qawDcEIXSvk4gxcfctH0JyeDo0f/QUX4TnU+x1Nbp7HPAunxwfnbFh/HiMqKC8aSpjOXfQriVpAnjLXe4Wuj5/po6mlxQTLBV6/jPf+Hn4c8laUXFF9ay0NVheJ0vl+YVR/PQMJ/7zs/CAK7ynUb/cLhqGz7ZFfnG8hKUXhFBf6b/qgBxau1ferFxI0mNp25kqevHy1B5+4i/NfUQPfHFnwMyYD59pX8A7UtDV0XhOev+RYcTqlvdP/zVnxWfFUnxNf1Dd6Xo4EsI1dnl7/aIFkP1iaWnPQVvCIJnvOU2kNzOfh9frV+avTiMeHpQCaLZtlZ/AsusLtzaxFKrsd+ld4n24gm0GtfenvyGz1rMKRWfyFJiuMuxWlSCoT769uQFcypvT4SrCKLV5z0laCqb/hO8o05TR74oTqOIJyNdKwjQMtDhNZym2ab/9TDfMFp1tagEkac2DhAQVmil8Pa1WuGB3dxKHmlsK2jxzfQFFTonzdX7fOM9dp7j/JPeTsTR7cn7SlDZ3BTor8uCDkaapQx6tq5ycPA+QdVR822kkrIy6+SaFQNn2t18X1XtXIG463q+qxxL7lbR+b7KW6qtjvp/OkUBWurVPJfNbVPDi9ZMN8Z/qnnybIAzXLWLc/kv6F/pFJWsZeDmYs20rG32PBqtLrleYYW8kTKHeNdLZFSZ6cUgAPL9GrdO7+lmSis9QgMX7SKeOF+7SVTLSluw0IyKFA9BImbWEcsHh6xx3MYK02Z8+78kV8ctpBSTtCorqaEVnmS8iWBY8Nn3dOortGu2X/TENH2TRu1WNESV7qWMLATOXL2WATOapSdbD1vWsuuSaMM9CHrczDrOQH4K6DkQizVKO9fu4PYKUFL8+xcseXLzRrUKs7w75B5UexMlSkkRkKY3Exm58/WeErScNY0ZL+nsTIvTWrDy7D0bPbJkOzPNro3k61hajkm8NUVVgceCFz1GssPlTW5s2fpEf5+o8Bro732bUxlvBmkJlaluVmR08c1mz5uzjPESf8UGo30rejmsPGvvLJwIJKJnOvObijdOxyDTnLaagJx2MOFBil1OLN892ZvT3+Ftpfx8qcnhm9tI4g4zymcMmZ2tNO09IhN+qErxQzIxBzbjDD3op9V6FIspmYj3DkyU7BlLIpAIzInCz575RyKbvpH3AHdWlgMdcBIHwo7MJXvSavrj9YXxYlRRJj1/x6ni9nJQXMJ2IEVML6bFaSu8UUvzKHz1Gk8WPCUfbvo3CRZwkf4NG1jrjlf2m0Q2Ww3k324xgHZFNn2NkSojlWmGJZijQfYko1O+6qt+zWTkN/OGrHJVWL8bYF6Mt6S0L250VJsRMawG9EqyxC3VoABbZILc5n6+nDfuJFoTFKOs4aycQ+CjgcrWbgXE57P+0Uw3DPYkE59DUXaBXLub6TgjL71WXStYYGxsW3RTIH+ERnXaZ6iNyVYjbAzkAUpheTjK3zDzdR1gdBAC7QG3HMikkobc2dKctKAGZrH2hbsiexJOE+glBxZbt9ncM/7hPogPEUBlSaxiMhMPH6ERgyicCkkFW+MwDJMf9OfSTT5TeRONZVNPkp3WGhfS4MGg2UMtc8Wa5lOVNGC1Ucm7clpcltaoZe1B/86xBnnhWQbC1GVRpH15rGCxjSNMMaxd5DIk5qIFMu1yXzgG2odlA7YnrAVRFLmgC2Wvx90uWKOnphgmlnelsuYK51ipGR9z51dGwWggU6G5nyU1NCmzmIyaGR5AuFqT5C+978XHTW3sq2Sd70wZdUCcYMuNhCK2HZTkQhnAQ0RKSth33JNm4PyUG3G851xVNR1Ju6bveR2ePWKhl7S6iu2lbPhmBvyhAl3hzvvlV1Nc02vlOvsw5aMuIq4HxgRrViWjhkBpzLQGsxvmn4ScMtMCE85Pd5j0KvsZTOTb23T9xFyWMmnQ891NHRaf2+Esc4pqMV6A7E1ENAgyWJ9HrE6yfZowi302zeGmOYR6meWFE27uOckQ4+mDUoyaIsPmIy4BS7OxIzQqf+scOuoXPHUm0GgceOSm0+E7X82xPnj8oF/v0j61a/jgmnpwcbej/83SBqv8k4xS83lTle0ugEVApBctvhrdIlVRw35OPbfZYQYd2hy4PH7EWeOhp+Z6M2ac2haMmLM1MOMA7Pk/ck+KSrUafe5MBweT9+pyT+WhUN0V42msogrztfeLlZ4JCQc3K3W9WLk28J3a/vLoU/HtHaHR/6deb/D9K/Mtn/3lNUAb+tY5h6tSzBYvk8jFstDcmEoxzkBzFEu6wc+NpEaSg2aY494nI4XcWTbI6UvTmbqXKPL13qHHs+qqYuSj1Qk1zc4ag5Hq8XHNUL1NzWR8Bx+FVrb6lkahUCFUEcgv1sJ8c6ciuTp8ep3lD3BM1VsH0qOiaXq6VJaO5iknU42PnM0NH2/G+2lKY7g6rFtYdVXhCA2XnCWJwvSiZrHuj7gsCRrkFahZFmpQYOhyUrTfLpZe2kGSo88uJQF97LnEa4u45ARLR7ZuT1Z3Peekh4br/diy83RFaJonyh2hET9oA8zEHPa9sINhqmmBrq5aznd2yzlIQOOz7EEHS5frjCW0SnbfeHyZ74zm6FPKLvVwXwNHHqfQOclG4QdY/snm3jx3jtJehZTXeY4RMJaXP0Jjq8phAwh1yLQSeFTmQ6vaZqiEaeQZ6CYag++C0tDiPRA/q5p2rk5gUDhSvdXk8TK7R7sN2uQTnuW4KpggSTGR0Fk8M2lsBkvPO5n0DpzGwi8ae/mcxmXhqvwRGuDoWlaAJwtzsGBGq7kUcTqbcQZOr0S6PFBYB3CjTX57VzBEOIFEXOKC5Q8S6kx3cgYhcYF88h4wJ7hdkbVlGidbudtnpGep68XzRY0sxpA7QqOik5y5iz215OtGHT4NzCNYmzIO5jXNLOuxM7PIP0Yb5tTXWHJtHKAJMsRJdRdKlV89xH+wuYjzTt1gocDXOJn0asX0a4ZQeZj+jItODhyh4VoWclbJ+LVk7xZ8S2t98AaNsezh+N3KkNEt5dhXKL+vemWncSw06Ka4XZA0H/qM5DGJytyosjZDqSZswTszd75sdU8mvbrxREku8vTmERWhj5S3aFlsMJ6FxPNPVH2S8Zl7mRrMYQ6+ThdPcPd2wKZq20apD0OwDEn5Ed54iKwMeLHjiQpGooudPDdE2r8LL1vgTTBIJliNU0kvbj4x95DvbY+KXtQoP+Ri7jWcaAviOCZR46RuCNS4caiAaKqQY8Zx52aXpYdgElk7vhdwEJVWoA+GGfwIh/WRJ4G3iTXDSJP9qGHKOssYtZ0BDtKeKgwT7w5vwsAq70iGPqLhqqw4jSSKhkOE0NVaTjgYSZwfOpWz7Q9kdLXBYfk1fFOkE0ULBjaNqmDgyApM4tgB+9uKMwSYCSKY1fAOQfmBgXWm0hBZg/TKbYhN+C/J5ueId/t1pDKp5Ls51v2ONyzaxxbMPZ7P6aZfAC5ZIYnz/auDdXJOe9qXTFViYHm9ATrP3CVJlU1hYECagU+DkvDnVV326tiOj7OF0OPyw6+N4OGA9FBo715QBO+yiAxT9a4GZN9OgRI+DbpfDiutDFtiZJshfJz2NWl5bwQG2/jGdYZX5PeIlbB2ba69iqfXQGljk2yNNmAiYixPO4367WXhXxHcWTYZfH/7In5ZZayHEq94psnaQ0prW0DYMIPDrsHAyMrInLECVnMOlsW4T8kxznmHLo3h8NVsuO6lnWy4sbhatOtHMlGNmPxjJdYarIySWorIPlnqMrrbl549fnzhw9JCsquEHtaAHvucssFbtDqRtDAGOPWY0xBETHzSDP+Np+of+wr5FitQLFX+HrDAXT/JUC3xOlIXeL6Z3Gkee1n4V8OPTVF6pmoerfJSrPJHaKx0zdT51XKvaxqIKLpVSazEpD+hs3ar0KTy5UEx9P0IFHDnpf2S0jW/g/PN1Q7XiH+uA6nS0Uj+fAKX+jhiFjmhn2X8Fqrm8094NbiDQkAqNJq/oiR6VH1aJHPdHjUajVzkJYCGL0D4gtW2wWEJz8L/1nPvqwctuygeNfKoLYg+qeyK7fC6/m3s8IdRs9EYYYLZ2jWamb+ybDSap6i3ds18RMpXX6byUrCjv97VERpVmZeeZavzX9SvMaN97+kIjfaYk55pr58IhB6BgGWX3tERGq2sUhSFzu53tsb/SLOU7+YIjVZabzEI9QO5n5egytJz1xe9V5dDxabSs3zl2UDoURglagAprzG0M0CFBtctZ716hRlDN1Nan3//VueASaKsNH3000DoUaC243As7+JAyljQa54GsiSZtvdx4uvUQeB0+7+v8jJUidNrvAfad9MhgdDX3UaC8zFZOveC0Xc0ffM6Ko/DFOsDvdyS4v8Ci2v1mNzPS0FK5m8vnvb1OtvTeAZzH3jLm9jHeEL0vp9qfVWNy/9/Kd0TbjtsaOKg/99ARX0ftO9EiK8ccYTGb2B+/T6OqDoRfvx9+bTvlKi/uf3wZ4XWpdM+AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBS8L/AYYtShou0LlHAAAAAElFTkSuQmCC" alt="" />
            </div>
            <div>
            <a className="btn btn-ghost normal-case text-2xl pt-8 font-bold">Sports Academy</a> 
            </div>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;