{ pkgs }: {
  deps = [
    pkgs.python311Full
    pkgs.sqlite
    pkgs.git
    pkgs.python311Packages.pip
    pkgs.python311Packages.setuptools
    pkgs.python311Packages.wheel
    pkgs.python311Packages.django
  ];
}