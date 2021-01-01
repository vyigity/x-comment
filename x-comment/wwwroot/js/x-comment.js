//Veli Yigit Yolcu
//29.12.2020
//vyigity
//1.0.0

function XComment(configuration) {

    let that = this;
    this.items = [];
    this.rootElement = configuration.rootElement;
    let currentReplyElement = null;

    let sendButtonText = "GÖNDER";
    let inputTextAreaPlaceHolder = "Yorum giriniz...";
    let sendReplyButtonText = "Gönder";
    let cancelButtonText = "İptal";
    //let updateButtonText = "Güncelle";
    let replyButtonText = "Yanıtla";
    let deleteButtonText = "Sil";

    function updateTextConfiguration() {

        if (typeof configuration.texts !== 'undefined') {

            if (typeof configuration.texts.sendButtonText !== 'undefined') {

                sendButtonText = configuration.texts.sendButtonText;
            }
            if (typeof configuration.texts.inputTextAreaPlaceHolder !== 'undefined') {

                inputTextAreaPlaceHolder = configuration.texts.inputTextAreaPlaceHolder;
            }
            if (typeof configuration.texts.sendReplyButtonText !== 'undefined') {

                sendReplyButtonText = configuration.texts.sendReplyButtonText;
            }
            if (typeof configuration.texts.cancelButtonText !== 'undefined') {

                cancelButtonText = configuration.texts.cancelButtonText;
            }
            if (typeof configuration.texts.updateButtonText !== 'undefined') {

                updateButtonText = configuration.texts.updateButtonText;
            }
            if (typeof configuration.texts.replyButtonText !== 'undefined') {

                replyButtonText = configuration.texts.replyButtonText;
            }
            if (typeof configuration.texts.deleteButtonText !== 'undefined') {

                deleteButtonText = configuration.texts.deleteButtonText;
            }
        }
    }

    let createInputForm = function () {

        let form = $('<form style="margin-bottom:15px">');
        let formgroup = $('<div class="form-group">');
        let inputTextArea = $('<textarea rows="4" class="form-control" style="margin-bottom:10px" placeholder="' + inputTextAreaPlaceHolder + '">'); 
        let button = $('<button class="btn btm-md btn-primary" type="button">' + sendButtonText+'</button>').click(function () {

            let def = configuration.onInserting(that, $(inputTextArea).val());

            def.done(function () {

                that.refresh();
            }).fail(function (data) {

                if (typeof configuration.onError !== 'undefined') {

                    configuration.onError(data);
                }

                that.refresh();
            });
        });

        $(formgroup).append(inputTextArea);
        $(form).append(formgroup);
        $(form).append(button);

        return form;
    }

    function createReplyComment(item)
    {
        let commentElement = $('<div class="comment">');
        let contentElement = $('<div class="content">');
        let actionsElement = $('<div class="actions"></div>');
        let authorElement = $('<a class="author">').text(configuration.authorName);
        let metadataElement = $('<div class="metadata">').text(Globalize.formatDate(new Date(), { datetime: "short" }));
        let textInputElement = $('<textarea class="form-control" rows="4"></textarea>');
        let textElement = $('<div class="text">');

        textElement.append(textInputElement);

        let replyActionElement = $('<a class="save">' + sendReplyButtonText + '</a>').click(function () {

            if (typeof configuration.onReplied !== 'undefined') {

                let value = $(textInputElement).val();
                let def = configuration.onReplied(that, item, value);

                def.done(function () {

                    that.refresh();
                }).fail(function (data) {

                    if (typeof configuration.onError !== 'undefined') {

                        configuration.onError(data);
                    }

                    that.refresh();
                });
            }
        });

        let cancelActionElement = $('<a class="save">' + cancelButtonText + '</a>').click(function () {

            currentReplyElement.remove();
            currentReplyElement = null;
        });

        commentElement.append($('<a class="avatar"><i class= "fas fa-user"></i></a>'));
        contentElement.append(authorElement);
        contentElement.append(metadataElement);
        contentElement.append(textElement);
        contentElement.append(actionsElement);
        commentElement.append(contentElement);
        actionsElement.append(replyActionElement);
        actionsElement.append(cancelActionElement);

        return commentElement;
    }

    let createChildrenDomElement = function (parentElement, item) {

        let commentElement = $('<div class="comment">');
        let contentElement = $('<div class="content">');
        let actionsElement = $('<div class="actions"></div>');

        let authorElement = $('<a class="author">').text(item.fullName);
        let metadataElement = $('<div class="metadata">').text(Globalize.formatDate(new Date(item.created), { datetime: "short" }));
        let textElement = $('<div class="text">').text(item.content);

        commentElement.append($('<a class="avatar"><i class= "fas fa-user"></i></a>'));
        contentElement.append(authorElement);
        contentElement.append(metadataElement);
        contentElement.append(textElement);
        contentElement.append(actionsElement);
   
        //if (typeof configuration.allowUpdate !== 'undefined' && configuration.allowUpdate) {

        //    let saveElement = $('<a class="save">' + updateButtonText + '</a>').click(function () {

        //        if (typeof configuration.onUpdating !== 'undefined') {

        //            let def = configuration.onUpdating(item);

        //            def.done(function () {

        //                that.refresh();
        //            }).fail(function (data) {

        //                if (typeof configuration.onError !== 'undefined') {

        //                    configuration.onError(data);
        //                }

        //                that.refresh();
        //            });
        //        }
        //    });

        //    $(actionsElement).append(saveElement);
        //}

        if (typeof configuration.allowReply === 'undefined' || configuration.allowReply) {

            let replyElement = $('<a class="reply">' + replyButtonText + '</a>').click(function () {

                if (currentReplyElement != null) {

                    currentReplyElement.remove();
                    currentReplyElement = null;
                }

                if (typeof configuration.onReplying !== 'undefined') {

                    configuration.onReplying(that, item);
                }

                let replyComment = createReplyComment(item);

                let existingCommentsElement = $(commentElement).find('> .comments');

                currentReplyElement = replyComment;

                if ($(existingCommentsElement).children().length > 0) {

                    $(existingCommentsElement).prepend(replyComment);

                } else {

                    existingCommentsElement.append(replyComment);
                }

            });

            $(actionsElement).append(replyElement);
        }

        if (typeof configuration.allowDelete === 'undefined' || configuration.allowDelete) {

            if (item.deletable) {

                let deleteElement = $('<a class="save">' + deleteButtonText + '</a>').click(function () {

                    if (typeof configuration.onDeleting !== 'undefined') {

                        let def = configuration.onDeleting(that, item);

                        def.done(function () {

                            that.refresh();
                        }).fail(function (data) {

                            if (typeof configuration.onError !== 'undefined') {

                                configuration.onError(data);
                            }

                            that.refresh();
                        });
                    }
                });

                $(actionsElement).append(deleteElement);
            }
        }

        $(commentElement).append(contentElement);

        let children = [];

        $.map(that.items, function (v, i) {

            if (v.parent == item.id) {

                children.push(v);
            }
        });

        let commentsElement = $('<div class="comments">');

        $.map(children, function (v, i) {

            createChildrenDomElement(commentsElement, v);
        });

        $(commentElement).append(commentsElement);

        if (parentElement != null)
            $(parentElement).append(commentElement);

        return commentElement;
    }

    this.getInstance = function () {

        return that;
    }

    let createControl = function createControl() {

        if (configuration.mode == "array") {

            that.items = configuration.items;

            let element = $('<div class="ui comments">');

            if (typeof configuration.width !== 'undefined') {

                $(that.rootElement).css('width', configuration.width + "px");
            }

            $.map(that.items, function (v, i) {

                if (v.parent == null) {

                    $(element).append(createChildrenDomElement(null, v));
                }
            });

            $(that.rootElement).html('');

            if (typeof configuration.allowInsert !== 'undefined' && configuration.allowInsert) {

                $(that.rootElement).append(createInputForm());
            }

            $(that.rootElement).append(element);

        } else {

            configuration.dataSource().done(function (data) {

                that.items = data;
                let element = $('<div class="ui comments">');

                if (typeof configuration.width !== 'undefined') {

                    $(that.rootElement).css('width', configuration.width + "px");
                }

                $.map(data, function (v, i) {

                    if (v.parent == null) {

                        $(element).append(createChildrenDomElement(null, v));
                    }
                });

                $(that.rootElement).html('');

                if (typeof configuration.allowInsert !== 'undefined' && configuration.allowInsert) {

                    $(that.rootElement).append(createInputForm());
                }

                $(that.rootElement).append(element);

            }).fail(function (data) {

                if (typeof configuration.onError !== 'undefined') {

                    configuration.onError(data);
                } else {
                    throw "Data cannot be fetched";
                }
            });
        }
    }

    this.refresh = function () {

        createControl();
    }

    updateTextConfiguration();
    createControl();

    return this;
}

$.fn.xcomment = function (configuration) {

    var obj = $(this[0]);

    configuration.rootElement = obj;

    let scomment = new XComment(configuration);

    return this;
}