import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

enum VideoThumbPlayButtonPosition { center, bottomRight }
enum VideoThumbTextSize { large, medium }

/// A thumbnail for videos with a title, image and optional length.
/// The root widget is an Expanded, so VideoThumb must be child of a
/// Column, Row or Flex. This is intended to keep the thumb occupying
/// the maximum space as possible within its parent.
class VideoThumb extends StatelessWidget {
  const VideoThumb(
      {@required VideoThumbTextSize textSize,
      @required String title,
      @required String lengthText,
      @required String thumbUrl,
      @required bool shouldShowPlayButton,
      @required void Function() onTap,
      Key key})
      : _textSize = textSize,
        _title = title,
        _lengthText = lengthText,
        _thumbUrl = thumbUrl,
        _shouldShowPlayButton = shouldShowPlayButton,
        _onTap = onTap,
        super(key: key);

  final VideoThumbTextSize _textSize;
  final String _title;
  final String _lengthText;
  final String _thumbUrl;
  final bool _shouldShowPlayButton;
  final void Function() _onTap;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: GestureDetector(
        key: key,
        onTap: _onTap,
        child: Container(
          child: Stack(
            children: <Widget>[
              ClipRRect(
                  borderRadius: BorderRadius.circular(24),
                  child: Container(
                    color: Colors.black12,
                    child: Image.network(
                      _thumbUrl,
                      errorBuilder: (BuildContext context, Object exception, StackTrace stackTrace) {
                        return Container();
                      },
                      fit: BoxFit.cover,
                      // height: double.infinity,
                      // width: double.infinity,
                      alignment: Alignment.center,
                    ),
                  )),
              Container(
                padding: const EdgeInsets.all(16),
                width: 152,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Expanded(
                      child: Text(
                        _title,
                        style: (_textSize == VideoThumbTextSize.large
                                ? Theme.of(context).textTheme.headline5
                                : Theme.of(context).textTheme.bodyText1)
                            .copyWith(color: Colors.white, height: 1.2, fontWeight: FontWeight.bold),
                      ),
                    ),
                    if (_lengthText != null)
                      ClipRRect(
                        borderRadius: BorderRadius.circular(16),
                        child: Opacity(
                          opacity: 0.3,
                          child: Container(
                            color: Colors.black,
                            padding: const EdgeInsets.fromLTRB(12, 1, 12, 1),
                            child: Text(
                              _lengthText,
                              style: Theme.of(context)
                                  .textTheme
                                  .bodyText1
                                  .copyWith(color: Colors.white, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              if (_shouldShowPlayButton)
                Transform.scale(
                  scale: 1,
                  child: Container(
                    alignment: Alignment.center,
                    child: Opacity(
                      opacity: 0.7,
                      child: FDSIcons.play,
                    ),
                  ),
                )
            ],
          ),
        ),
      ),
    );
  }
}
