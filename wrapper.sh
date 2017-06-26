#!/bin/bash
args2=$2
args3=$3
usage(){
echo "This script was created in order to deploy web servers via ansible."
echo "This script takes 2 arguments"
echo "-s		For deploying specific web server."
echo "-a		For deploying all services."
echo ""
echo ""
echo "example for deploying all services: ./wrapper.sh -a"
echo "example for deploying specific service: ./wrapper.sh -s img-panda"
echo "example for deploying specific service to hosts: ./wrapper.sh -s img-panda ANSBILE-HOST-FILE "

}
specificservice(){
if [ -z $args3 ]; then
	ansible-playbook base.yml --tags nodejs,forever,$args2
else
   	ansible-playbook base.yml -i $args3 --tags nodejs,forever,$args2
fi
}
case "$1" in
  --help)
    usage
    ;;
  -s)
    specificservice
    ;;
  -a)
    ansible-playbook base.yml
    ;;
  *)
    echo "$0 - This is an ansible wrapper, plesae use --help for additional information."
esac
