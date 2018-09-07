    $(function () {

            $("#date").datepicker({

                        dateFormat: 'yy-mm-dd'

                        });

    });


    angular.module("date", [])

        .directive("datepicker", function () {

        return {

            restrict: "A",

            link: function (scope, el, attr) {

                el.datepicker({

                                dateFormat: 'yy-mm-dd'

                            });

            }

        };

    })

        .controller("HDTutoCtrl", function ($scope) {

    });
        